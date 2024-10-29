import BlogThemes from '~/components/blocks/blog-themes';

const categories = [
  {
    slug: 'content',
    name: 'Content',
    lang: 'de',
  },
  {
    slug: 'ecommerce',
    name: 'eCommerce',
    lang: 'de',
  },
  {
    slug: 'seo',
    name: 'Seo',
    lang: 'de',
  },
  {
    slug: 'marketresearch',
    name: 'Market Research',
    lang: 'de',
  },
  {
    slug: 'socialmedia',
    name: 'Social Media',
    lang: 'de',
  },
  {
    slug: 'advertising',
    name: 'Advertising',
    lang: 'de',
  },
  {
    slug: 'discoverexample',
    name: 'Discover example',
    lang: 'de',
  },
];

export default {
  title: 'Blocks/themes',
};

export const Default = () => <BlogThemes heading="Blog’s Themes" categories={[]} />;

Default.storyName = 'default';

export const WithItems = () => <BlogThemes heading="Blog’s Themes" categories={categories} />;

WithItems.storyName = 'with items';
