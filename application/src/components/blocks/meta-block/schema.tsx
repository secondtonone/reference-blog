import Head from 'next/head';

interface MainProps {
  schema: string
}

const Schema: React.FC<MainProps> = ({
  schema,
}) => (
  !['', '{}'].includes(schema) && (
    <Head>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </Head>
  )
);

export default Schema;
