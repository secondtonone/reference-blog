import fixturePages from '~/__fixtures__/pages';

export default [
  {
    id: 8,
    name: 'Keyword Research',
    slug: 'keyword-research',
    previewImage:
      'https://static.example.com/blog/uploads/files/a8/7c/a87cc8a2a3f8112a72ebc76d9e7e5564/group_2465.jpg',
    pages: fixturePages,
    parent: {
      id: 1,
      name: 'SEO',
      slug: 'seo',
      lang: 'en',
      description: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we’ll cover everything you need to know to craft an organic search strategy for your website.',
      metaTitle: 'SEO from example',
      metaDescription: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we’ll cover everything you need to know to craft an organic search strategy for your website.',
      parent: null,
      template: 'category-groups',
      children: []
    },
  },
  {
    name: 'What Is SEO',
    slug: 'what-is-seo',
    previewImage:
      'https://static.example.com/blog/uploads/files/a8/7c/a87cc8a2a3f8112a72ebc76d9e7e5564/group_2465.jpg',
    pages: fixturePages,
    parent: {
      id: 1,
      name: 'SEO',
      slug: 'seo',
      lang: 'en',
      description: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we’ll cover everything you need to know to craft an organic search strategy for your website.',
      metaTitle: 'SEO from example',
      metaDescription: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we’ll cover everything you need to know to craft an organic search strategy for your website.',
      parent: null,
      template: 'category-default',
      children: []
    },
  },
];
