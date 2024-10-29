import Head from 'next/head';
import { dropTags } from '~/utils';
import { CanonicalSubdomainViewModel } from '~/view-model';

interface MainProps {
  title: string,
  description?: string,
  keywords?: string,
  canonical: string,
  subdomain?: CanonicalSubdomainViewModel
}

const Main: React.FC<MainProps> = ({
  title,
  description = '',
  keywords = '',
  canonical,
  subdomain = 'www',
  children
}) => (
  <Head>
    <title key="title">{!['undefined'].includes(title) ? dropTags(title) : 'example Blog'}</title>
    {description && <meta name="description" key="description" content={description} />}
    {keywords && <meta name="keywords" key="keywords" content={keywords} />}
    {canonical && <link rel="canonical" key="canonical" href={`https://${subdomain}.example.com/${canonical}`} />}
    {children}
  </Head>
);

export default Main;
