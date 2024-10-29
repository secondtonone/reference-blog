import styled from 'styled-components';
import Button, { CustomButtonProps } from '../custom-button';
import SvgIcon from '~/components/containers/svg-icon';

interface Props extends CustomButtonProps {
  active?: boolean;
  border?: boolean;
  colored?: boolean;
  currentColor?: boolean;
  code?: string;
  label?: string;
  'aria-label'?: string;
  sizes?: [number, number];
  view?: 'filled';
}

const ButtonIcon: React.FC<Props> = ({
  active = false,
  border = false,
  colored = false,
  code = 'radio',
  label,
  onClick,
  sizes,
  w: width,
  'aria-label': ariaLabel,
  view,
}) => (
  <ButtonIconStyled
    data-test={`button-icon-${code}`}
    aria-label={ariaLabel}
    use={active ? 'primary' : 'secondary'}
    active={active}
    border={border}
    colored={colored}
    code={code}
    size="m"
    label={label}
    onClick={onClick}
    w={width}
    view={view}
  >
    {code && (
      <SvgIcon code={code} size={sizes} />
    )}
    {label && (
      <ButtonLabelStyled>{label}</ButtonLabelStyled>
    )}
  </ButtonIconStyled>
);

const ButtonIconStyled = styled(Button)<{ view?: 'filled' }>`
  [class*="SButton"] {
    padding: 0 7px !important;
    height: 36px !important;
    width: ${({ label, code, view }) => (label && code ? 'auto' : (view === 'filled' ? '21px' : '36px'))} !important;;
    font-size: 12px !important;
    border-radius: 6px !important;
    color: ${({ active, colored }) => (!active ? 'currentColor' : (colored ? 'rgba(255, 255, 255, 0.38)' : ''))} !important;

    [data-ui-name="Button.Text"] {
      display: flex;
      align-items: center;
    }
  }

  ${({ view, theme }) => (view === 'filled' ? (`
    & button[class*="SButton"] {
      padding: 0 !important;
      height: 21px !important;
      border-radius: 3px !important;
      border: none !important;
      min-width: 21px !important;
      background-color: ${theme.secondary3} !important;
      color: ${theme.white} !important;

      &:hover,
      &:active,
      &:disabled {
        background-color: ${theme.orangeBrand} !important;
        color: ${theme.white} !important;
      }
    }
  `) : '')}
`;

const ButtonLabelStyled = styled.span`
  margin-left: 7px;
`;

export default ButtonIcon;
