import { Container } from '~/components/atoms';
import CategoriesTree from '~/components/organisms/categories-tree';
import fixtureTree from '~/__fixtures__/categories-tree';

export default {
  title: 'Organisms/categories tree',
};

export const Default = () => (
  <Container>
    <CategoriesTree tree={fixtureTree} />
  </Container>
);

Default.storyName = 'default';
