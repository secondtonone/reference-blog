import Head from 'next/head';

interface MainProps {
  alternates: string[][]
}

const Alternate: React.FC<MainProps> = ({
  alternates = []
}) => (
  <Head>
    {alternates.map(([subdomain, alternateUrl]) => (
      <link
        key={subdomain}
        rel="alternate"
        href={`https://${subdomain === 'en' ? 'www' : subdomain}.example.com/${alternateUrl}`}
        hrefLang={subdomain}
      />
    ))}
  </Head>
);

export default Alternate;
