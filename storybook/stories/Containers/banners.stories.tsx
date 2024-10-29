import Banner from '~/components/containers/banner';
import { Container } from '~/components/atoms';

export default {
  title: 'Containers/Banners',
};

export const _Column = () => (
  <Banner.Column>
    <Banner.Label />
  </Banner.Column>
);

_Column.storyName = 'column';

export const _Wide = () => (
  <Container>
    <Banner.Wide>
      <Banner.Label />
    </Banner.Wide>
  </Container>
);

_Wide.storyName = 'wide';
