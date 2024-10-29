import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import articleHeadings from '~/__fixtures__/article-headings';

export default {
  title: 'Blocks/article headings',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleHeadings} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';
