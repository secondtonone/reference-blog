import ArticleCard, { IArticleCardProps } from '~/components/organisms/article-card';
import { Container } from '~/components/atoms';
import fixture from '~/__fixtures__/article-cards';

export default {
  title: 'Organisms/article card',
  component: ArticleCard,
  argTypes: {
    background: {
      options: [
        'purpleIllust',
        'orangeIllust',
        'yellowIllust',
        'greenIllust',
        'blueIllust',
        'orangePaleIllust',
        'redPaleIllust',
        'greenGrassIllust',
        'pinkIllust',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args: IArticleCardProps) => (
  <Container>
    <ArticleCard {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  ...fixture[0],
};

Default.storyName = 'default';
