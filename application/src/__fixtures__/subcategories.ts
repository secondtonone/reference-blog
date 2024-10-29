import fixturePages from './pages';
import { SubcategoriesViewModel } from '~/view-model';

const pages = fixturePages.slice(0, 8);
const previewImage = 'https://static.example.com/blog/uploads/files/01/07/0107013bb4a3aaaf1a11c9930cdf6a4f/what-is-seo-desk-illustration.svg';
const parent = {
  id: 1, name: 'SEO', slug: 'seo', lang: 'en', description: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we\u2019ll cover everything you need to know to craft an organic search strategy for your website.', metaTitle: 'SEO from example', metaDescription: 'Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, we\u2019ll cover everything you need to know to craft an organic search strategy for your website.', parent: null, children: []
};
const background = 'yellowPD';

const subcategories: SubcategoriesViewModel = [{
  id: 2,
  name: 'What is SEO',
  slug: 'what-is-seo',
  lang: 'en',
  parent,
  previewImage: 'https://static.example.com/blog/uploads/files/e6/41/e641c28b51a89224ddf9681a19241ac2/keyword-research-desk-illustration.svg',
  background,
  pages
}, {
  id: 8,
  name: 'Keyword Research',
  slug: 'keyword-research',
  lang: 'en',
  parent,
  previewImage,
  background,
  pages
}, {
  id: 153,
  name: 'On-page SEO',
  slug: 'on-page-seo',
  lang: 'en',
  parent,
  previewImage,
  background,
  pages
}, {
  id: 7,
  name: 'Link Building',
  slug: 'link-building',
  lang: 'en',
  parent,
  previewImage,
  background,
  pages
}, {
  id: 5,
  name: 'Technical SEO',
  slug: 'technical-seo',
  lang: 'en',
  parent,
  previewImage,
  background,
  pages
}, {
  id: 154,
  name: 'SEO Copywriting',
  slug: 'seo-copywriting',
  lang: 'en',
  parent,
  previewImage,
  background: 'yellowPD',
  pages
}, {
  id: 155,
  name: 'Website Architecture',
  slug: 'website-architecture',
  lang: 'en',
  parent,
  previewImage: '',
  background,
  pages
}, {
  id: 156,
  name: 'SEO Tools',
  slug: 'seo-tools',
  lang: 'en',
  parent,
  previewImage: '',
  background: 'blue',
  pages: []
}];

export default subcategories;
