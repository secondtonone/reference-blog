import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import articleEbooksPromo from '~/__fixtures__/article-ebooks-promo';

export default {
  title: 'Blocks/article ebook promo widget',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleEbooksPromo} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';
