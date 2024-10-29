import { AuthorViewModel } from '~/view-model';

const authors: AuthorViewModel[] = [
  {
    id: 111,
    name: 'Olga Andrienko',
    alias: 'olga-andrienko',
    email: 'example@example.com',
    position: 'Super seo specialist',
    company: 'Yandex',
    bio:
      'Olga Andrienko is a Super seo specialist at <a href="http://yandex.ru">Yandex</a>, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
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
  {
    id: 222,
    name: 'Ivan Petrov',
    alias: 'ivan-petrov',
    email: 'example@example.com',
    position: 'Super seo specialist',
    company: 'Google',
    bio:
      'Ivan Petrov is a Super seo specialist at Google, where she develops SEO and content strategies for ecommerce and technology clients. Her career dream is to make SEO more accessible for marketers of all experience levels. She believes wholeheartedly that better search results are better for everyone.',
    photo: 'https://storage.googleapis.com/blog/testing/user/ivan.jpg',
    socials: {
      webSite: 'https://example.com',
      twitter: '@hello',
      facebook: '100009766004824-m3a/',
      instagram: 'hello.help-me',
      linkedin: 'https://linkedin./privet/',
    },
    isPublic: true
  },
  {
    id: 666,
    name: 'Mr. Hidden',
    alias: 'hidden-profile',
    email: 'example@example.com',
    position: 'Super secret specialist',
    company: 'Nope',
    bio: 'Unknown',
    photo: 'https://storage.googleapis.com/blog/testing/user/ivan.jpg',
    socials: {
      webSite: 'https://example.com',
      twitter: '@hello',
      facebook: '100009766004824-m3a/',
      instagram: 'nothing-to-do-here',
      linkedin: 'https://linked.kek/',
    },
    isPublic: false
  },
];

export default authors;
