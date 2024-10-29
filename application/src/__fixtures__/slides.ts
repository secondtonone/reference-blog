import { ArticlesViewModel } from '~/view-model';
import authors from './authors';

const slides: ArticlesViewModel = [
  {
    id: '0',
    title: 'Google Provides New Options to Help You During COVID-19: Google News Update',
    preview:
      'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      id: 1,
      name: 'Link Building',
      slug: 'seo/link-building',
      lang: 'en',
      children: null
    },
    isHot: false,
    timeToRead: 5,
    previewImage: 'https://static.example.com/blog-next-static/banners/4.svg',
    altPreviewImage: 'Preview Image',
    author: authors[0],
    url: 'improve-seo',
    publishedAt: 1597908972,
    share: 0,
    background: 'greenIllust',
  },
  {
    id: '3',
    title: 'Some article text with captions and tool words and third party keys & other stuff',
    preview:
      'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      id: 1,
      name: 'Marketing',
      slug: 'seo/marketing',
      lang: 'en',
      children: null
    },
    isHot: true,
    timeToRead: 5,
    previewImage: 'https://static.example.com/blogxt-static/banners/3.svg',
    altPreviewImage: 'Preview Image',
    author: authors[1],
    url: 'seo-techniques',
    publishedAt: 1597908972,
    share: 0,
    background: 'orangeIllust',
  },
  {
    id: '4',
    title: 'Some article text with captions and tool words and third party keys & other stuff',
    preview:
      'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      id: 1,
      name: 'Marketing',
      slug: 'seo/marketing',
      lang: 'en',
      children: null
    },
    isHot: false,
    timeToRead: 5,
    previewImage: 'https://static.example.com/blogxt-static/banners/1.svg',
    altPreviewImage: 'Preview Image',
    author: authors[1],
    url: 'h1-tag',
    publishedAt: 1597908972,
    share: 0,
    background: 'blueIllust',
  },
  {
    id: '1',
    title: 'The Ultimate Guide to Google Search Operators and Google Search Commands',
    preview:
      'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      id: 1,
      name: 'Link Building',
      slug: 'seo/link-building',
      lang: 'en',
      children: null
    },
    isHot: true,
    timeToRead: 5,
    previewImage: 'https://static.example.com/blogxt-static/banners/1.svg',
    altPreviewImage: 'Preview Image',
    author: authors[0],
    url: 'white-hat-seo',
    publishedAt: 1597908972,
    share: 0,
    background: 'blueIllust',
  },
  {
    id: '2',
    title: 'Some article text with captions and tool words and third party keys & other stuff',
    preview:
      'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      id: 1,
      name: 'Marketing',
      slug: 'seo/marketing',
      lang: 'en',
      children: null
    },
    isHot: false,
    timeToRead: 5,
    previewImage: 'https://static.example.com/blogxt-static/banners/2.svg',
    altPreviewImage: 'Preview Image',
    author: authors[1],
    url: '5-reasons-why-growth-hackers-need-example-and-competitive-intelligence',
    publishedAt: 1597908972,
    share: 0,
    background: 'yellowIllust',
  },
];

export default slides;
