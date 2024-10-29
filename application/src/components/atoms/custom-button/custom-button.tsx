import Button, { IButtonProps } from '@semcore/button';

import IconLoading from '../icon-loading';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SelectedButton,
  InternalButton,
  AnimatedButton
} from './variants';

export interface CustomButtonProps extends IButtonProps {
  selected?: boolean;
  border?: boolean;
  internal?: boolean;
  wide?: boolean;
  noborder?: boolean;
  animated?: boolean;
}

const CustomButton: React.FC<CustomButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  use = 'primary',
  size = 'xl',
  border,
  selected,
  internal,
  loading = false,
  className,
  wide,
  noborder,
  animated,
  css,
  'data-test': dataTest,
  ...props
}) => {
  const baseProps = {
    className, size, wide, noborder
  };

  if (dataTest) {
    baseProps['data-test'] = dataTest;
  }

  if (loading) {
    props.children = (
      <IconLoading internal={use === 'primary'} />
    );
  }

  if (selected) {
    return (
      <SelectedButton data-test="button-selected" {...baseProps}>
        <Button use="secondary" size={size} {...props} />
      </SelectedButton>
    );
  }

  if (animated) {
    return (
      <AnimatedButton data-test="button-secondary" border={border} {...baseProps}>
        <Button use="secondary" size={size} {...props} />
      </AnimatedButton>
    );
  }

  if (use === 'secondary') {
    return (
      <SecondaryButton data-test="button-secondary" border={border} {...baseProps}>
        <Button use="secondary" size={size} {...props} />
      </SecondaryButton>
    );
  }

  if (use === 'tertiary') {
    return (
      <TertiaryButton data-test="button-tertiary" {...baseProps} active={props.active}>
        <Button use="tertiary" size={size} {...props} />
      </TertiaryButton>
    );
  }

  if (internal) {
    return (
      <InternalButton data-test="button-secondary" className={className}>
        <Button use={use} size={size} {...props} />
      </InternalButton>
    );
  }

  if (loading) {
    return (
      <PrimaryButton data-test="button-loading" {...baseProps}>
        <Button use={use} size={size} {...props} />
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton data-test="button-primary" {...baseProps}>
      <Button use={use} size={size} {...props} />
    </PrimaryButton>
  );
};

export default CustomButton;
