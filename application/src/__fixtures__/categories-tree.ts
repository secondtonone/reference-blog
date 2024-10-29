import { CategoriesTreeViewModel } from '~/view-model';

const seoParent = {
  parent: {
    id: 1,
    slug: 'seo',
    name: 'SEO',
    lang: 'en',
    children: []
  }
};

const tree: CategoriesTreeViewModel = [
  {
    id: 1,
    slug: 'seo',
    name: 'SEO',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'seo-101',
        name: 'SEO 101',
        lang: 'en',
        children: [],
        ...seoParent
      },
      {
        id: 1,
        slug: 'advanced-seo',
        name: 'Advanced SEO',
        lang: 'en',
        children: [],
        ...seoParent
      },
      {
        id: 1,
        slug: 'international-seo',
        name: 'International SEO',
        lang: 'en',
        children: [],
      },
      {
        id: 1,
        slug: 'technical-seo',
        name: 'Technical SEO',
        lang: 'en',
        children: [],
      },
      {
        id: 1,
        slug: 'local-seo',
        name: 'Local SEO',
        lang: 'en',
        children: [],
        ...seoParent
      },
      {
        id: 1,
        slug: 'link-building',
        name: 'Link Building',
        lang: 'en',
        children: [],
        ...seoParent
      },
      {
        id: 1,
        slug: 'keyword-research',
        name: 'Keyword Research',
        lang: 'en',
        children: [],
        ...seoParent
      },
    ],
  },
  {
    id: 1,
    slug: 'ecommerce',
    name: 'eCommerce',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'ecommerce-seo',
        name: 'eCommerce SEO',
        lang: 'en',
        children: [],
      },
    ],
  },
  {
    id: 1,
    slug: 'content',
    name: 'Content',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'content-marketing',
        name: 'Content Marketing',
        lang: 'en',
        children: [],
      },
    ],
  },
  {
    id: 1,
    slug: 'market-research',
    name: 'Market Research',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'market-research',
        name: 'Market Research',
        lang: 'en',
        children: [],
      },
    ],
  },
  {
    id: 1,
    slug: 'social-media',
    name: 'Social Media',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'social-media-marketing',
        name: 'Social Media Marketing',
        lang: 'en',
        children: [],
      },
    ],
  },
  {
    id: 1,
    slug: 'advertising',
    name: 'Advertising',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'paid-search',
        name: 'Paid Search (PPC)',
        lang: 'en',
        children: [],
      },
      {
        id: 1,
        slug: 'display-advertising',
        name: 'Display Advertising',
        lang: 'en',
        children: [],
      },
      {
        id: 1,
        slug: 'advertising',
        name: 'Advertising',
        lang: 'en',
        children: [],
      },
    ],
  },
  {
    id: 1,
    slug: 'discover-example',
    name: 'Discover example',
    lang: 'en',
    children: [
      {
        id: 1,
        slug: 'data-studies',
        name: 'Data Studies',
        lang: 'en',
        children: [],
      },
      {
        id: 1,
        slug: 'example-news',
        name: 'example News',
        lang: 'en',
        children: [],
      },
    ],
  },
];

export default tree;
