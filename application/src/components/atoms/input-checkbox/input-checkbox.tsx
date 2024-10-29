import Checkbox, { ICheckboxProps } from '@semcore/checkbox';
import styled from 'styled-components';

import { layout, LayoutProps } from 'styled-system';

import Icon from './icon';

interface Props extends ICheckboxProps {
  maxWidth?: number;
  onCheckboxChange?: (value: boolean) => void,
  variant?: 'default' | 'success',
  checked?: boolean
}

const InputCheckbox: React.FC<Props> = ({
  checked = false,
  disabled = false,
  label = '',
  maxWidth,
  onCheckboxChange,
  variant = 'default'
}) => (
  <InputCheckboxStyled data-test="" maxWidth={maxWidth} variant={variant} label={label}>
    <Checkbox.Value
      onChange={onCheckboxChange}
      checked={checked}
      disabled={disabled}
    />
    {label && (
      <Checkbox.Text>{label}</Checkbox.Text>
    )}
  </InputCheckboxStyled>
);

const InputCheckboxStyled = styled(Checkbox)<LayoutProps>`
  position: relative;

  &:not(:first-child) {
     margin-top: ${({ label }) => (label ? '10px' : '0')} !important;
  }

  ${layout}

  [data-ui-name="Checkbox.Value"] {
    + [data-ui-name="Flex"] {
      margin-top: 3px !important;
      margin-right: 7px !important;

      + [data-ui-name="Checkbox.Text"] {
        color: ${({ theme }) => (theme.isLight ? theme.opposed : 'rgba(255, 255, 255, 0.87)')};
      }
      &:before {
        border: 1.5px solid ${({ theme }) => (theme.isLight ? '#000' : 'rgba(255, 255, 255, 0.6)')} !important;
        border-radius: 2px;
        margin: -1px;
        background: transparent;
      }
      &:after {
        background: none;
      }
    }

    &:checked {
      + [data-ui-name="Flex"] {
        &:before {
          background: ${({ theme, variant }) => (variant !== 'success' ? (theme.isLight ? '#000' : 'darkgrey') : theme.success)} !important;
          border-color: ${({ theme, variant }) => (variant === 'success' ? theme.success : (theme.isLight ? '#000' : 'darkgrey'))} !important;
        }
        &:after {
          width: 8px;
          height: 6px;
          background-size: cover;
          background-repeat: no-repeat;
          top: 0;
          bottom: 0;
          margin: auto;
          background-image: url(${({ theme }) => Icon[theme.name]}) !important;
        }
      }
    }
  }
`;

export default InputCheckbox;
