import ArticleContent from '~/components/containers/article-content';
import { Container, BoxAdaptive } from '~/components/atoms';
import ArticleWidgetsDiv from '~/__fixtures__/article-widgets-div';

const Content = {
  DEFAULT:
    '<p>[create-campaign destination_url="some_url" header="Spotlight Your Business to Anyone from Everywhere" button_text="Try now!"]</p>',
  DEFAULT_DIV: ArticleWidgetsDiv,
  SHORT:
    '<p>[create-campaign destination_url="some_url" header="Spotlight Your Business to Anyone from Everywhere" button_text="Try Local SEO!" background="purpleBrand" image="https://static.example.com/blog/uploads/files/0d/78/0d783a1daa761a54df564e98b2a49987/group.svg" code="short" shiftY="-5" button_color="orangeBrand"]</p>',
  SHORT_DIV: `
      <div 
        data-widget="create-campaign" 
        data-destination_url="short_url" 
        data-header="Short Business to Anyone from Everywhere" 
        data-button_text="Try now!"
        data-background="purpleBrand" 
        data-image="https://static.example.com/blog/uploads/files/0d/78/0d783a1daa761a54df564e98b2a49987/group.svg" 
        data-code="short" 
        data-shiftY="-5" 
        data-button_color="orangeBrand"
    ></div>`,
};

export default {
  title: 'Widgets/create campaign',
};

export const Default = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={Content.DEFAULT} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';

export const DefaultFromDiv = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={Content.DEFAULT_DIV} parseContent={false} />
    </BoxAdaptive>
  </Container>
);

DefaultFromDiv.storyName = 'default from div';

export const ShortFromDiv = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={Content.SHORT_DIV} parseContent={false} />
    </BoxAdaptive>
  </Container>
);

ShortFromDiv.storyName = 'short from div';

export const Short = () => (
  <Container>
    <BoxAdaptive maxWidth={865}>
      <ArticleContent markup={Content.SHORT} />
    </BoxAdaptive>
  </Container>
);

Short.storyName = 'short';
