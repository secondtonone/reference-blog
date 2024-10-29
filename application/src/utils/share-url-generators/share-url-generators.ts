const social = {
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://www.linkedin.com',
  youtube: 'https://www.youtube.com',
};

export interface IShareUrlGenerator {
  pageTitle?: string;
  hashtags?: Array<string>;
  url?: string;
  slug?: string;
}

const facebookShareUrlGenerator = (options: IShareUrlGenerator) => {
  const { slug, url: canonical = '', pageTitle = '' } = options;
  const baseURL = social[slug];
  if (baseURL) {
    const url = new URL(`${baseURL}/sharer/sharer.php`);
    url.searchParams.append('u', canonical);
    url.searchParams.append('quote', pageTitle);
    return url.toString();
  }
  return '';
};

const twitterShareUrlGenerator = (options: IShareUrlGenerator) => {
  const { slug, url: canonical = '', pageTitle = '' } = options;
  const baseURL = social[slug];
  if (baseURL) {
    const url = new URL(`${baseURL}/intent/tweet`);
    url.searchParams.append('text', pageTitle);
    url.searchParams.append('url', canonical);
    return url.toString();
  }
  return '';
};

const mailShareUrlGenerator = (options: IShareUrlGenerator) => {
  const { url = '', pageTitle = '' } = options;
  return `mailto:?body=${pageTitle}${pageTitle && url ? '%0D%0A' : ''}${url}`;
};

const shareUrlGenerators: Record<string, (options: IShareUrlGenerator) => string> = {
  facebook: facebookShareUrlGenerator,
  twitter: twitterShareUrlGenerator,
  mail: mailShareUrlGenerator,
};

export {
  social,
  facebookShareUrlGenerator,
  twitterShareUrlGenerator,
  mailShareUrlGenerator,
};

export default shareUrlGenerators;
