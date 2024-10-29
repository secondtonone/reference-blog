import {
  PageViewModel
} from '~/view-model';
import fixtureArticle from '~/__fixtures__/article-content';

const page: PageViewModel = {
  id: 1,
  previewImage: '/previewImage.jpg',
  title: 'title',
  author: {
    id: 111,
    name: 'Olga Testova',
    alias: 'olga-testova',
    email: 'example@example.com',
    position: 'Super seo specialist',
    company: 'Yandex',
    bio:
      'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
    photo: 'https://storage.googleapis.com/semblog-rc/testing/user/olga.jpg',
    socials: {
      webSite: 'https://example.com',
      twitter: 'https://twitter.com/hello',
      facebook: '100009766004824',
      instagram: 'hello.hello',
      linkedin: 'chto-chto-942423146',
    },
    isPublic: true
  },
  publishedAt: new Date('2020-01-01').getTime(),
  category: {
    id: 1,
    name: 'name',
    slug: 'slug',
    lang: 'lang',
    children: null
  },
  timeToRead: 1,
  url: 'url',
  template: 'article-base',
  socialImage: 'socialImage',
  preview: 'preview',
  extraImage: 'extra.png',
  altPreviewImage: 'Preview Image',
  altSocialImage: 'Social Image',
  hidePreviewImage: 0,
  editedAt: new Date('2020-02-02').getTime(),
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  schemaOrg: 'schemaOrg',
  related: [5916, 5915, 5914, 5913],
  translated: null,
  critical: {
    'article-content': {
      id: 1,
      content: fixtureArticle,
      team: 'team',
      galaxy: 'galaxy'
    }
  },
  alternates: [],
  status: 'published',
  tableOfContent: true
};

export default page;
