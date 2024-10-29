import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';
import SubcategoryGroupsNoPaged from '~/components/templates/subcategory-groups-no-paged';
import { Container } from '~/components/atoms';

export default {
  title: 'Templates/Subcategory groups no paged',
  component: SubcategoryGroupsNoPaged,
};

const Template = (args) => (
  <Container>
    <SubcategoryGroupsNoPaged {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  ...fixtureSubcategoryGroupsNoPagedProps
};

Default.storyName = 'default';
