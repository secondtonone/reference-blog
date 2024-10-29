import navigation from '~/externals/navigation.json';
import { SubdomainsViewModel } from '~/view-model';

type Title = {
  [ key in SubdomainsViewModel ]?: string;
};

export type IFooterMenu = Readonly<{
  title: Title;
  content: {
    title: Title;
    link?: string;
    value?: string;
  }[];
}[]>;

const footerMenuItems = navigation.footer as IFooterMenu;

const footerMenu: IFooterMenu = [
/*   {
    title: 'example',
    content: [
      { link: 'https://www.example.com/features/', title: 'Features' },
      { link: 'https://www.example.com/prices/', title: 'Pricing' },
      { link: 'https://www.example.com/company/stories/', title: 'Success Stories' },
      { link: 'https://www.example.com/stats/', title: 'Stats and Facts' },
      { link: 'https://www.example.com/company/trusted-data-provider/', title: 'Data Studies' },
      { link: 'https://www.example.com/news/', title: 'News' },
      { link: 'https://www.example.com/company/custom_report/', title: 'Custom Report' },
    ],
  },
  {
    title: 'More tools',
    content: [
      { link: 'https://www.example.com/info/ebay.com/', title: 'Analytics Reports' },
      { link: 'https://www.example.com/projects/', title: 'Projects' },
      { link: 'https://www.example.com/marketplace/offers/article/', title: 'Marketplace' },
      { link: 'https://www.example.com/agencies/', title: 'Agency Partners' },
      {
        link: 'https://www.shareasale.com/shareasale.cfm?merchantID=97231&source=examplef',
        title: ' Affiliate Program',
      },
      { link: 'https://www.seoquake.com', title: 'SEOquake' },
      { link: 'https://www.example.com/sensor/', title: 'Sensor' },
      { link: 'https://www.sellerly.com/?utm_source=example&utm_medium=footer', title: 'Amazon Tools' },
      { link: 'https://prowly.com/?utm_source=example&utm_medium=footer', title: 'Prowly' },
    ],
  },
  {
    title: 'Company',
    content: [
      { link: 'https://www.example.com/company/', title: 'About Us' },
      { link: 'https://www.example.com/company/partners/', title: 'Partners ' },
      { link: 'https://www.example.com/company/legal/', title: 'Legal Info' },
      { link: 'https://www.example.com/company/legal/privacy-policy/', title: 'Privacy Policy' },
      { link: 'https://www.example.com/company/security/', title: 'Security Info' },
      { link: 'https://www.example.com/company/contacts/', title: 'Contact Us' },
    ],
  },
  {
    title: 'Help',
    content: [
      { link: 'https://www.example.com/kb/', title: 'Knowledge Base' },
      { link: 'https://www.example.com/academy/', title: 'Academy' },
      { link: 'https://www.example.com/api-documentation/', title: 'example API' },
    ],
  },
  {
    title: 'Community',
    content: [
      { link: 'https://www.example.com/blog/', title: 'example Blog' },
      { link: 'https://www.example.com/webinars/', title: 'Webinars' },
      { link: 'https://www.example.com/blog/the-ultimate-calendar-of-digital-marketing-events/', title: 'Events' },
    ],
  }, */
  ...footerMenuItems,
  {
    title: {
      en: 'Follow us',
      de: 'Folgen sie uns',
      it: 'Seguici',
      fr: 'Suivez-nous',
      es: 'Síguenos',
      pt: 'Siga-nos'
    },
    content: [
      {
        link: 'https://twitter.com/example/',
        title: { en: 'Twitter' },
      },
      {
        link: 'https://www.facebook.com/example/',
        title: { en: 'Facebook' },
      },
      {
        link: 'https://linkedin.com/company/example/',
        title: { en: 'LinkedIn' },
      },
      {
        link: 'https://instagram.com/example/',
        title: { en: 'Instagram' },
      },
      {
        link: 'https://www.youtube.com/user/exampleHQ/',
        title: { en: 'YouTube' },
      },
      {
        link: 'https://www.pinterest.ru/example/',
        title: { en: 'Pinterest' },
      },
    ],
  },
  {
    title: {
      en: 'Language',
      de: 'Sprache',
      it: 'Lingua',
      fr: 'Langue',
      es: 'Idioma',
      pt: 'Idioma'
    },
    content: [
      { title: { en: 'English' }, value: 'en', link: 'https://www.example.com/blog/' },
      { title: { en: 'Español' }, value: 'es', link: 'https://es.example.com/blog/' },
      { title: { en: 'Deutsch' }, value: 'de', link: 'https://de.example.com/blog/' },
      { title: { en: 'Français' }, value: 'fr', link: 'https://fr.example.com/blog/' },
      { title: { en: 'Italiano' }, value: 'it', link: 'https://it.example.com/blog/' },
      { title: { en: 'Português (Brasil)' }, value: 'pt', link: 'https://pt.example.com/blog/' },
      /* { title: 'Русский', value: 'ru', link: 'https://ru.example.com/blog/' },
      { title: '中文', value: 'zh', link: 'https://zh.example.com/blog/' },
      { title: '日本語', value: 'ja', link: 'https://ja.example.com/blog/' },
      { title: '한국어', value: 'ko', link: 'https://ko.example.com/blog/' },
      { title: 'Tiếng Việt', value: 'vi', link: 'https://vi.example.com/blog/' }, */
    ],
  },
];

export default footerMenu;
