const menuEvents = [
  {
    name: 'menu-sub-search',
    category: 'Blog',
    action: 'click-submenu',
    label: 'search'
  },
  {
    name: 'menu-sub-feedback',
    category: 'Blog',
    action: 'click-submenu',
    label: 'feedback'
  },
  {
    name: 'menu-sub-subscription',
    category: 'Blog',
    action: 'click-submenu',
    label: 'subscription'
  },
  {
    name: 'menu-sub-theme',
    category: 'Blog',
    action: 'click-submenu',
    label: 'theme'
  },
  {
    name: 'menu-lang-chang',
    category: 'Blog',
    action: 'change_blog_language',
    label: 'dropdown'
  }
] as const;

export default menuEvents;
