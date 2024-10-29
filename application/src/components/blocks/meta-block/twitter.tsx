import Head from 'next/head';

import {
  CanonicalSubdomainViewModel
} from '~/view-model';

interface SocialProps {
  title: string,
  image: string,
  description: string,
  url: string,
  authorLink?: string,
  subdomain?: CanonicalSubdomainViewModel
}

const Twitter: React.FC<SocialProps> = ({
  title,
  image,
  description,
  url,
  authorLink = '',
  subdomain = 'www'
}) => {
  const creator = authorLink.split('/')[3];

  return (
    <Head>
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" key="twitter:site" content="@example" />
      <meta name="twitter:title" key="twitter:title" content={title} />
      <meta name="twitter:description" key="twitter:description" content={description} />
      <meta name="twitter:image" key="twitter:image" content={image} />
      <meta name="twitter:url" key="twitter:url" content={`https://${subdomain}.example.com/${url}`} />
      {creator ? <meta name="twitter:creator" key="twitter:creator" content={`@${creator}`} /> : null }
    </Head>
  );
};

export default Twitter;
