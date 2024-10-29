const articleEvents = [
  {
    name: 'article-page',
    category: 'Blog',
    action: 'author-shown-post'
  },
  {
    name: 'article-link-target-blank',
    category: 'Blog',
    action: 'target_blank'
  },
  {
    name: 'article-image_zoom',
    category: 'Blog',
    action: 'image_zoom_click'
  },
  {
    name: 'article-toc-toggle',
    category: 'Blog',
    action: 'toc-toggle'
  },
  {
    name: 'article-toc-click',
    category: 'Blog',
    action: 'toc-click'
  },
  {
    name: 'article-toc-click-shown',
    category: 'Blog',
    action: 'toc-shown'
  },
  {
    name: 'article-survey-shown',
    category: 'Blog',
    action: 'survey-shown'
  },
  {
    name: 'article-survey-click',
    category: 'Blog',
    action: 'survey-click'
  },
  {
    name: 'article-metrics-shown',
    category: 'Blog',
    action: 'metrics-shown'
  },
  {
    name: 'article-metrics-click',
    category: 'Blog',
    action: 'metrics-click'
  },
] as const;

export default articleEvents;
