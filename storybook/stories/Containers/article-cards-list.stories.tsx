import ArticleCardsList, { IArticleCardsListProps } from '~/components/containers/article-cards-list';
import { Container } from '~/components/atoms';
import fixture from '~/__fixtures__/article-cards';

export default {
  title: 'Containers/Article cards list',
  component: ArticleCardsList,
};

const Template = (args: IArticleCardsListProps) => (
  <Container>
    <ArticleCardsList {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  articles: [...fixture],
};

Default.storyName = 'default';
