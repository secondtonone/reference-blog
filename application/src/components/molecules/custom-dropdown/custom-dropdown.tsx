import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import DropdownMenu from '@semcore/dropdown-menu';
import { getScheme } from '~/styles/scheme';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import isServer from '~/constants/is-server';

const lightTheme = getScheme();

const dropdownPopperStyle = { border: 0, boxShadow: 'none' };
const dropdownListStyle = { padding: 0, margin: 0 };

interface Props extends BoxAdaptiveProps {
  trigger: React.ReactNode
  showOnRender?: boolean
  items?: React.ReactNode[]
  contentBefore?: React.ReactNode
  contentAfter?: React.ReactNode
  offset?: [number, number]
  hMax?: string
  background?: (isLight: boolean) => string
  color?: (isLight: boolean) => string
}

const CustomDropdown: React.FC<Props> = ({
  offset = [0, 0], showOnRender = false, interaction, trigger, items, hMax = '250px', contentBefore, contentAfter, ...props
}) => {
  const [visible, setVisible] = useState<boolean>(showOnRender);

  useEffect(() => {
    const close = () => {
      setVisible(false);
    };

    if (!isServer) {
      window.addEventListener('scroll', close);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener('scroll', close);
      }
    };
  }, []);

  const toggleVisible = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <DropdownMenu
      size="xl"
      offset={offset}
      interaction={interaction}
      visible={visible}
      onVisibleChange={toggleVisible}
    >
      <DropdownMenu.Trigger
        data-test="dropdown-trigger"
        aria-describedby="dropdown"
      >
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Popper style={dropdownPopperStyle} data-test="dropdown-popper">
        <DropdownMenuStyled {...props}>
          {contentBefore}
          {items ? (
            <DropdownMenu.List hMax={hMax} style={dropdownListStyle}>
              {items.map((item, idx) => (
                <DropdownMenu.Item
                  // eslint-disable-next-line react/no-array-index-key
                  key={`dropdown-item-${idx}`}
                  data-test="dropdown-item"
                >
                  {item}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.List>
          ) : null}
          {contentAfter}
        </DropdownMenuStyled>
      </DropdownMenu.Popper>
    </DropdownMenu>
  );
};

const DropdownMenuStyled = styled(BoxAdaptive)`
  background: ${({ background, theme }) => (background ? background(theme.isLight) : lightTheme.opposed)} !important;
  color: ${({ theme, color }) => (color ? color(theme.isLight) : theme.white)} !important;
  box-shadow: ${({ isLight, theme }) => (isLight || theme.isLight ? '0px 15px 30px rgba(51, 59, 81, 0.05)' : 'none')} !important;

  div[class*="SDropdownMenuItem"] {
    padding: 0 !important;

    &:hover {
      background: transparent;
      color: ${lightTheme.orangeBrand} !important;
    }
  }
`;

export default CustomDropdown;
