import { SubdomainsViewModel } from '~/view-model';

type ArticleBaseData = {
  [key in SubdomainsViewModel]: {
    share: string;
  };
};

const articleBaseData: ArticleBaseData = {
  en: {
    share: 'Share',
  },
  es: {
    share: 'Share',
  },
  de: {
    share: 'Share',
  },
  it: {
    share: 'Share',
  },
  fr: {
    share: 'Share',
  },
  pt: {
    share: 'Share',
  },
};

export default articleBaseData;
