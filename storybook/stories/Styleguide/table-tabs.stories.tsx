import TableTabs from '~/components/containers/table-tabs';

export default {
  title: 'Styleguide/tables',
};

export const Tables = () => (
  <TableTabs
    heading="Table with tabs"
    subheading="Very advanced seo options"
    tabs={['Tab 1', 'Tab 2', 'Tab 3']}
    columns={['Some', 'Keys', 'Placed', 'Here']}
  />
);

Tables.storyName = 'tables';
