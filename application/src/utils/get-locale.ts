import getCanonicalSubdomain from './get-canonical-subdomain';
import PageMainArticles from '~/constants/page-main-articles';

type Locales = keyof typeof PageMainArticles;

const getLocale = (host: string) => {
  const canonicalSubdomain = getCanonicalSubdomain(host) as (Locales | 'www');

  return canonicalSubdomain === 'www'
    ? 'en'
    : ((Object.keys(PageMainArticles) as Array<Locales>)
      .includes(canonicalSubdomain)
      ? canonicalSubdomain
      : 'en');
};

export default getLocale;
