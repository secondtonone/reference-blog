import CategoryCard from '~/components/organisms/category-card';
import { Container } from '~/components/atoms';
import fixturePages from '~/__fixtures__/pages';
import { IllustGroupTokens } from "~/styles/palette";

const CategoryCardProps = {
  title: 'What Is SEO',
  link: 'https://www.example.com/blog/category/seo/what-is-seo/?cache=no',
  image:
    'https://static.example.com/blog/uploads/files/a8/7c/a87cc8a2a3f8112a72ebc76d9e7e5564/group_2465.jpg',
  list: fixturePages,
};

export default {
  title: 'Organisms/category card',
  component: CategoryCard,
  argTypes: {
    background: {
      name: 'background',
      defaultValue: 'initial',
      type: { name: 'select', required: false },
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
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <CategoryCard {...args}/>
  </Container>
);

export const Default4Pages = Template.bind({});

Default4Pages.args = {
  ...CategoryCardProps,
  list: CategoryCardProps.list.slice(0, 4),
};

Default4Pages.storyName = 'default 4 pages';

export const Default6Pages = Template.bind({});

Default6Pages.args = {
  ...CategoryCardProps,
  list: CategoryCardProps.list.slice(0, 6),
};

Default6Pages.storyName = 'default 6 pages';

export const Default8Pages = Template.bind({});

Default8Pages.args = {
  ...CategoryCardProps,
  list: CategoryCardProps.list.slice(0, 8),
};

Default8Pages.storyName = 'default 8 pages';

export const Default10Pages = Template.bind({});

Default10Pages.args = {
  ...CategoryCardProps,
};

Default10Pages.story = 'default 10 pages';
