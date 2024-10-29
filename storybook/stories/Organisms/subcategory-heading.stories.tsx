import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';
import SubcategoryHeading from '~/components/organisms/subcategory-heading';
import { Container } from '~/components/atoms';

export default {
  title: 'Organisms/subcategory heading',
  component: SubcategoryHeading,
};

const Template = (args) => (
  <Container>
    <SubcategoryHeading {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
   ...fixtureSubcategoryGroupsNoPagedProps,
};

Default.storyName = 'default';

