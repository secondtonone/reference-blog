import { Button } from '~/components/atoms';

export default {
  title: 'Atoms/button',
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
};

const Template = args => <Button w={200} {...args}>Subscribe</Button>;

export const Default = Template.bind({});

Default.storyName = 'default';

Default.args = { disabled: false }

export const Disabled = () => (
  <Button w={200} disabled>
    Subscribe
  </Button>
);

Disabled.storyName = 'disabled';

export const Loading = () => (
  <Button w={200} loading>
    Loading
  </Button>
);

Loading.storyName = 'loading';

export const Ghost = () => (
  <Button use="secondary" w={200}>
    Subscribe
  </Button>
);

Ghost.storyName = 'ghost';

export const GhostAnimated = () => (
  <Button w={200} animated>
    Subscribe
  </Button>
);

GhostAnimated.storyName = 'ghost animated';

export const GhostDisabled = () => (
  <Button use="secondary" w={200} disabled>
    Subscribe
  </Button>
);

GhostDisabled.storyName = 'ghost disabled';

export const GhostLoading = () => (
  <Button use="secondary" w={200} loading>
    Loading
  </Button>
);

GhostLoading.storyName = 'ghost loading';

export const GhostSelected = () => (
  <Button use="secondary" w={200} selected>
    Subscribe
  </Button>
);

GhostSelected.storyName = 'ghost selected';

export const GhostWithBorder = () => (
  <Button use="secondary" w={200} border>
    Subscribe
  </Button>
);

GhostWithBorder.storyName = 'ghost with border';

export const Internal = () => (
  <Button use="primary" w={200} internal>
    Subscribe
  </Button>
);

Internal.storyName = 'internal';
