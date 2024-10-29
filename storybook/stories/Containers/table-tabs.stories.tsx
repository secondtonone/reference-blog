import TableTabs from '~/components/containers/table-tabs';

export default {
  title: 'Containers/Table tabs',
};

export const _3Items = () => (
  <TableTabs
    heading="Table with tabs"
    subheading="Very advanced seo options"
    tabs={['Tab 1', 'Tab 2', 'Tab 3']}
    columns={['Some', 'Keys', 'Placed', 'Here']}
  />
);

_3Items.storyName = '3 items';
