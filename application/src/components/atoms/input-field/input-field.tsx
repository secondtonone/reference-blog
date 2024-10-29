import { useCallback } from 'react';
import { Merge } from '@semcore/core';
import Input, { IInputProps, IInputValueProps, InputSize } from '@semcore/input';
import FieldContainer, { IFieldContainerProps } from '../field-container';
import useFocus from '~/hooks/use-focus';

export interface IInputFieldProps extends IInputProps, IInputValueProps, Omit<IFieldContainerProps, 'field'> {
  before?: React.ReactNode
  after?: React.ReactNode
  size?: InputSize
  scrollTooltip?: boolean
  tooltipDirection?: string
  inputRef?:React.RefObject<HTMLInputElement>,
  css?: any
}

const InputField: React.FC<React.HTMLAttributes<HTMLDivElement> &
  Merge<IInputFieldProps, React.InputHTMLAttributes<HTMLInputElement>>
> = ({
  placeholder,
  value,
  onChange,
  before,
  after,
  disabled,
  readOnly,
  error,
  internal,
  borderless,
  size = 'xl',
  scrollTooltip = true,
  type,
  name,
  autocomplete,
  required,
  tooltipDirection,
  onBlur,
  inputRef,
  css,
  ...props
}) => {
  const { focused, setFocused } = useFocus();

  const onBlurHandler = useCallback((e) => {
    if (onBlur) onBlur(e);
    setFocused(false);
  }, [onBlur]);

  const onFocusHandler = useCallback(() => {
    setFocused(true);
  }, []);

  return (
    <FieldContainer
      data-test=""
      internal={internal}
      borderless={borderless}
      error={error}
      showError={focused}
      scrollTooltip={scrollTooltip}
      direction={tooltipDirection}
      field={() => (
        <Input
          size={size}
          {...props}
        >
          {before}
          <Input.Value
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            disabled={disabled}
            readOnly={readOnly}
            type={type}
            name={name}
            autocomplete={autocomplete}
            required={required}
            ref={inputRef}
          />
          {after}
        </Input>
      )}
    />
  );
};

export { Input };

export default InputField;
