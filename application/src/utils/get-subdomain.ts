import getConfig from 'next/config';
import locales from '~/constants/locales';

const getSubdomain = (host: string) => {
  const { publicRuntimeConfig: { forceSubdomain } } = getConfig();
  const locale = host?.replace('https://', '').split('.')[0];
  const result = locale === 'www' ? 'en' : locale;

  return locales?.has(result) ? result : (forceSubdomain ? 'en' : '');
};

export default getSubdomain;
