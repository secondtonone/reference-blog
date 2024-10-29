const pageEvents = [
  {
    name: 'page-depth-scroll',
    category: 'Blog',
    action: 'scroll'
  },
  {
    name: 'web-vitals',
    category: 'Blog_Core_Web_Vitals',
    nonInteraction: true
  },
  {
    name: 'next-custom-metric',
    category: 'Blog_Next_Custom_Metric',
    nonInteraction: true
  }
] as const;

export default pageEvents;
