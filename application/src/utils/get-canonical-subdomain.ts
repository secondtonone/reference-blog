import getSubdomain from './get-subdomain';
import locales from '~/constants/locales';

const checkSubdomain = (subdomain: string) => (locales?.has(subdomain) ? (subdomain === 'en' ? 'www' : subdomain) : 'www');

const getCanonicalSubdomain = (host: string) => {
  const url = host || window?.location?.host || '';

  return checkSubdomain(getSubdomain(url));
};

export default getCanonicalSubdomain;
