import fixtureArticleTitlesList from '~/__fixtures__/article-titles-list';
import ArticleTitlesList from '~/components/containers/article-titles-list';
import { Container } from '~/components/atoms';

export default {
  title: 'Containers/Article titles list',
  component: ArticleTitlesList,
};

const Template = (args) => (
  <Container>
    <ArticleTitlesList {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  pages: [...fixtureArticleTitlesList],
};

Default.storyName = 'default';