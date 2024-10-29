import YoutubeWidget from '~/components/organisms/youtube-widget';
import data from '~/__fixtures__/youtube';
import { Container } from '~/components/atoms';

export default {
  title: 'Organisms/youtube widget',
};

export const Default = () => (
  <Container>
    <YoutubeWidget {...data} />
  </Container>
);

Default.storyName = 'default';
