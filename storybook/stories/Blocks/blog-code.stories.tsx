import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import { articleCodeBlock, articleCodeBlockJS } from '~/__fixtures__/article-code-block';

export default {
  title: 'Blocks/article code block',
};

export const HtmlCode = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleCodeBlock} />
    </BoxAdaptive>
  </Container>
);

HtmlCode.storyName = 'html code';

export const JsCode = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={articleCodeBlockJS} />
    </BoxAdaptive>
  </Container>
);

JsCode.storyName = 'js code';
