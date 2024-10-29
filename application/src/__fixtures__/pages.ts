import {
  PageViewModel
} from '~/view-model';
import fixtureArticle from '~/__fixtures__/article-content';

const pages: Array<PageViewModel> = [
  {
    id: 1,
    previewImage: '/previewImage.jpg',
    title: 'Why Google’s 10 Blue Links Will Have to Go (Eventually)',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
      'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog-rc/testing/user/olga.jpg',
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
    url: 'blog/december-2021-product-review-update',
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
  },
  {
    id: 2,
    previewImage: '/previewImage.jpg',
    title: 'SEO Clinic Episode III: How to Analyze Your Place in the Online Market and Unwrap New Growth Avenues',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/unwrap-new-growth-avenues',
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
  },
  {
    id: 3,
    previewImage: '/previewImage.jpg',
    title: 'SEO Clinic Episode II: Hands-on Landing Page Optimization Tips',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/hands-on-landing-page-optimization-tips',
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
  },
  {
    id: 4,
    previewImage: '/previewImage.jpg',
    title: '17 SEO Blogs for Everyone from Beginners to Experts',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/seo-blog',
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
  },
  {
    id: 5,
    previewImage: '/previewImage.jpg',
    title: '4 Ways to Use Your .htaccess File',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/htaccess-file',
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
  },
  {
    id: 6,
    previewImage: '/previewImage.jpg',
    title: 'How to Boost Your E-commerce Store\'s SEO by Offering Promo Codes',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/bing-vs-google',
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
  },
  {
    id: 7,
    previewImage: '/previewImage.jpg',
    title: 'Are Core Updates Becoming Less Powerful? [Study]',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/google-core-update-trends',
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
  },
  {
    id: 8,
    previewImage: '/previewImage.jpg',
    title: 'How & Why Usability Will Be the Future of SEO',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/seo-usability',
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
  },
  {
    id: 9,
    previewImage: '/previewImage.jpg',
    title: 'How To Write Explosive Content: The Do\'s and Don\'ts of Marketing',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/seo-usability',
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
  },
  {
    id: 10,
    previewImage: '/previewImage.jpg',
    title: 'Content Spam: How to Detect & Combat Negative SEO Tactics',
    author: {
      id: 111,
      name: 'Olga Testova',
      alias: 'olga-testova',
      email: 'example@example.com',
      position: 'Super seo specialist',
      company: 'Yandex',
      bio:
        'Olga Testova is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
      photo: 'https://storage.googleapis.com/blog/testing/user/olga.jpg',
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
    url: 'blog/seo-usability',
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
  },
];

export default pages;
