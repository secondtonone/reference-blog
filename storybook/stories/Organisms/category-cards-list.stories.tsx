import CategoryCardsList from '~/components/organisms/category-cards-list';
import { Container } from '~/components/atoms';
import fixtureCategoryCardsList from '~/__fixtures__/category-cards-list';

const CategoryCardProps = {
  categories: fixtureCategoryCardsList
};

export default {
  title: 'Organisms/category cards list',
  component: CategoryCardsList,
};

const Template = (args) => (
  <Container>
    <CategoryCardsList {...args}/>
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  categories: [...fixtureCategoryCardsList],
};

Default.storyName = 'default';