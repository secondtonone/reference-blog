const paginationEvents = [
  {
    name: 'pagination-showmore',
    category: 'Blog',
    action: 'paging_via_showmore'
  },
  {
    name: 'pagination-by-page',
    category: 'Blog',
    action: 'paging_via_numbers'
  }
] as const;

export default paginationEvents;
