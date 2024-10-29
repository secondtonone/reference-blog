import Textarea, { ITextareaProps } from '@semcore/textarea';
import FieldContainer, { IFieldContainerProps } from '../field-container';
import useFocus from '~/hooks/use-focus';

export interface ITextareaFieldProps extends ITextareaProps, Omit<IFieldContainerProps, 'field'> {
  scrollTooltip?: boolean,
  css?: any
}

const TextareaField: React.FC<
  ITextareaFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  placeholder,
  value,
  onChange,
  disabled,
  readOnly,
  error,
  internal,
  size = 'xl',
  scrollTooltip = true,
  ...props
}) => {
  const { focused, setFocused } = useFocus();

  return (
    <FieldContainer
      data-test="field-container"
      internal={internal}
      error={error}
      showError={focused}
      scrollTooltip={scrollTooltip}
      field={() => (
        <Textarea
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          {...props}
        />
      )}
    />
  );
};

export default TextareaField;
