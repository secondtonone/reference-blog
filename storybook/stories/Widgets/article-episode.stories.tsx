import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import fixtureEpisode from '~/__fixtures__/article-episodes';

export default {
  title: 'Widgets/episode widget',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={660}>
      <ArticleContent markup={fixtureEpisode} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';
