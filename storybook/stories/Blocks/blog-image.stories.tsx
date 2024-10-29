import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import { articleImage } from '~/__fixtures__/article-image';

export default {
  title: 'Blocks/article image',
};

export const WithCaption = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleImage} />
    </BoxAdaptive>
  </Container>
);

WithCaption.storyName = 'with caption';
