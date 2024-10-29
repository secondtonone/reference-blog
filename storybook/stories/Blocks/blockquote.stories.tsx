import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import { articleBlockquote, articleBlockquoteWithImage } from '~/__fixtures__/article-blockquote';

export default {
  title: 'Blocks/article blockquote',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleBlockquote} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';

export const WithImage = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleBlockquoteWithImage} />
    </BoxAdaptive>
  </Container>
);

WithImage.storyName = 'with image';
