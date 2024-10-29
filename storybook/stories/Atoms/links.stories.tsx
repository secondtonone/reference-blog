import { action } from '@storybook/addon-actions';
import { LinkText, LinkButton } from '~/components/atoms';

export default {
  title: 'Atoms/links',
};

export const Default = () => <LinkText href="#">Link</LinkText>;

Default.storyName = 'default';

export const ColoredByBlock = () => (
  <LinkText href="#" currentColor>
    Link
  </LinkText>
);

ColoredByBlock.storyName = 'colored by block';

export const _LinkButton = () => (
  <LinkButton onClick={action('clicked')}>Button looks like link</LinkButton>
);

_LinkButton.storyName = 'link-button';
