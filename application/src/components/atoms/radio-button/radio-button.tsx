import Radio, { IRadioProps, RadioValue, RadioGroup } from '@semcore/radio';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

import { brUp } from '~/styles/helpers';

export interface Props extends IRadioProps {
  maxWidth?: number
  onRadioChange?: (value: boolean) => void
  variant?: 'default' | 'success'
  checked?: boolean
  currentColor?: boolean
  value?: RadioValue
  dataTest?: string
}

const RadioButton: React.FC<Props> = ({
  checked = false,
  disabled = false,
  value,
  label = '',
  maxWidth,
  onRadioChange,
  currentColor,
  variant = 'default',
  dataTest = 'radio',
}) => (
  <RadioButtonStyled data-test={`${dataTest}-label`} size="l" maxWidth={maxWidth} variant={variant} label={label} currentColor={currentColor}>
    { value
      ? (
        <Radio.Value
          value={value}
          disabled={disabled}
        />
      )
      : (
        <Radio.Value
          onChange={onRadioChange}
          checked={checked}
          disabled={disabled}
        />
      )}
    {label && (
      <Radio.Text>{label}</Radio.Text>
    )}
  </RadioButtonStyled>
);

const RadioButtonStyled = styled(Radio)<LayoutProps & { currentColor?: boolean}>`
  position: relative;
  color: currentColor !important;
  ${layout}

  span[class*="SText"] {
    font-size: 12px !important;

    ${brUp('xm', `
      font-size: 14px !important;
    `)}
  }

  div[class*="SValue"] {
    width: 16px !important;
    height: 16px !important;

    ${brUp('xm', `
      width: 20px !important;
      height: 20px !important;
    `)}
  }

  div[class*="SValue"]::before {
    border: 1.4px solid ${({ theme, currentColor }) => (currentColor ? 'currentColor' : (theme.isLight ? theme.opposed : theme.secondary4))} !important;
    background-color: transparent !important;
  }

  input:focus ~ div[class*="SValue"]::before {
    box-shadow: 0 0 0 3px rgba(255, 100, 45, 0.2)!important;
  }

  input:checked ~ div[class*="SValue"]::after {
    border-color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : (theme.isLight ? theme.opposed : theme.secondary4))} !important;
    background-color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : (theme.isLight ? theme.opposed : theme.secondary4))} !important;
    width: 10px !important;
    height: 10px !important;

    ${brUp('xm', `
      width: 12px !important;
      height: 12px !important;
    `)}
  }
`;

export { RadioGroup };

export type { RadioValue };
export default RadioButton;
