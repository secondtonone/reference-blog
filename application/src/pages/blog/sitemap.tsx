import { NextPageContext } from 'next';
import getConfig from 'next/config';
import { useApi } from '~/hooks';
import { getLocale } from '~/utils';

const Sitemap = () => null;

export async function getServerSideProps({ req, res }: NextPageContext) {
  const {
    publicRuntimeConfig: { apiPublic, locales },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const host = req?.headers?.host || '';

  const subdomain = getLocale(host);

  const validLangs = new Set([...locales.filter(locale => locale !== 'en'), 'www']);

  if (validLangs.has(host.split('.')[0])) {
    const { api } = useApi(apiInternal || apiPublic);

    const sitemap = await api.get(`https://storage.googleapis.com/blog-prod/feeds/sitemap/${subdomain}/sitemap.xml`,
      { headers: { Accept: 'application/xml' } });

    if (sitemap) {
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.write(sitemap);
    }
  }

  res.end();

  return {
    props: {}
  };
}

export default Sitemap;
