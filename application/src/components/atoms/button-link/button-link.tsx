import { IButtonProps } from '@semcore/button';
import LinkText from '../link-text';
import { BannerColors } from '~/styles/palette';

import {
  PrimaryButtonLink,
  SecondaryButtonLink,
  SelectedButtonLink,
  AnimatedButtonLink
} from './variants';

type Background = keyof BannerColors | string

interface ButtonLinkProps {
  selected?: boolean
  animated?: boolean
  wide?: boolean
  inverted?: boolean
  border?: boolean
  background?: Background
  unhovered?: boolean
}

type TButtonLink = IButtonProps & ButtonLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

const ButtonLink: React.FC<TButtonLink> = ({
  use = 'primary',
  border,
  selected,
  wide,
  animated,
  className,
  inverted,
  background = 'orangeBrand',
  ...props
}) => {
  if (selected) {
    return (
      <SelectedButtonLink data-test="button-link-selected" wide={wide} className={className}>
        <LinkText {...props} />
      </SelectedButtonLink>
    );
  }

  if (animated) {
    return (
      <AnimatedButtonLink data-test="button-link-animated" wide={wide} className={className}>
        <LinkText {...props} />
      </AnimatedButtonLink>
    );
  }

  if (use === 'secondary') {
    return (
      <SecondaryButtonLink data-test="button-link-secondary" inverted={inverted} wide={wide} border={border} className={className}>
        <LinkText {...props} />
      </SecondaryButtonLink>
    );
  }

  return (
    <PrimaryButtonLink data-test="button-link-primary" wide={wide} background={background} className={className}>
      <LinkText {...{ ...props, className }} />
    </PrimaryButtonLink>
  );
};

export default ButtonLink;
