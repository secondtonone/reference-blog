import { SubdomainsViewModel } from '~/view-model';
import constructParams from '~/utils/construct-params';

type Lang = {
  slides: string,
  editors?: string,
  seo: number,
  marketing: number,
  content: number
}

const en: Lang = {
  slides: constructParams('id[]', 6273, 6103, 6283),
  editors: constructParams('id[]', 867, 2603, 1873, 3918),
  seo: 1,
  marketing: 24,
  content: 11
};

const fr: Lang = {
  slides: constructParams('id[]', 6042, 6046, 6220),
  editors: constructParams('id[]', 3965, 3849, 4070, 2628),
  seo: 54,
  marketing: 62,
  content: 61
};

const es: Lang = {
  slides: constructParams('id[]', 6157, 6155, 6035),
  editors: constructParams('id[]', 3921, 3970, 3161, 3827),
  seo: 76,
  marketing: 84,
  content: 83
};

const de: Lang = {
  slides: constructParams('id[]', 6007, 6119, 6146),
  editors: constructParams('id[]', 3397, 3057, 3979, 4253),
  seo: 35,
  marketing: 45,
  content: 42
};

const it: Lang = {
  slides: constructParams('id[]', 6272, 6192, 6037),
  editors: constructParams('id[]', 1850, 143, 4781, 3878),
  seo: 127,
  marketing: 143,
  content: 135
};

const pt: Lang = {
  slides: constructParams('id[]', 6048, 6185, 6183),
  editors: constructParams('id[]', 815, 3950, 5250, 3575),
  seo: 100,
  marketing: 107,
  content: 108
};

const PageMainArticles: Record<SubdomainsViewModel, Lang> = {
  en,
  fr,
  es,
  de,
  it,
  pt
} as const;

export default PageMainArticles;
