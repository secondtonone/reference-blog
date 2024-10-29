import Head from 'next/head';

import {
  PageViewModel, CanonicalSubdomainViewModel
} from '~/view-model';

const domainToCodesMap = {
  www: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
  fr: 'fr_FR',
  pt: 'pt_BR'
};

interface SocialProps {
  page?: PageViewModel,
  title: string,
  image: string,
  description: string,
  url: string,
  subdomain?: CanonicalSubdomainViewModel
}

const Social: React.FC<SocialProps> = ({
  title,
  image,
  description,
  url,
  subdomain = 'www'
}) => (
  <Head>
    {title && (<meta property="og:title" key="og:title" content={title} />)}
    {image && (<meta property="og:image" key="og:image" content={image} />)}
    {description && (<meta property="og:description" key="og:description" content={description} />)}
    {url && (<meta property="og:url" key="og:url" content={`https://${subdomain}.example.com/${url}`} />)}
    <meta property="og:type" key="og:type" content="article" />
    <meta property="og:locale" key="og:locale" content={`${domainToCodesMap[subdomain]}.utf-8`} />
    <meta property="og:site_name" key="og:site_name" content="example Blog" />
  </Head>
);

export default Social;
