import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import { articleTable, articleTableWithHead } from '~/__fixtures__/article-table';

export default {
  title: 'Blocks/article table',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleTable} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';

export const WithHeader = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleTableWithHead} />
    </BoxAdaptive>
  </Container>
);

WithHeader.storyName = 'with header';
