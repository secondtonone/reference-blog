import { Spinner } from '~/components/atoms';

export default {
  title: 'Atoms/spinner',
};

export const Default = () => <Spinner />;

Default.storyName = 'default';

export const Small = () => <Spinner size={20} />;

Small.storyName = 'small';
