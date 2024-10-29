import { CanonicalSubdomainViewModel, PageViewModel } from '~/view-model';
import MetaBlock from '~/components/blocks/meta-block';
import getSchema from './get-schema';

interface Props {
  page: PageViewModel,
  canonicalSubdomain?: CanonicalSubdomainViewModel,
  alternates?: string[][]
}

const MetaTagsArticle: React.FC<Props> = ({
  page,
  canonicalSubdomain,
  alternates = []
}) => {
  const [
    schemaPerson,
    schemaBreadcrumbs,
    schemaArticle
  ] = getSchema({ page });

  return (
    <>
      <MetaBlock.Main
        title={page.metaTitle || page.title}
        description={page.metaDescription}
        canonical={`${page.url}/`}
        subdomain={canonicalSubdomain}
      >
        <meta name="robots" content={`${!page?.deindex ? 'index' : 'noindex'}, follow`} />
        {page?.previewImage && (<link rel="preload" as="image" href={page.previewImage} />)}
      </MetaBlock.Main>
      <MetaBlock.Alternate
        alternates={alternates}
      />
      <MetaBlock.Social
        title={page.title}
        description={page.preview}
        image={page.socialImage}
        url={page.url}
        subdomain={canonicalSubdomain}
      />
      <MetaBlock.Twitter
        title={page.title}
        description={page.preview}
        image={page.socialImage}
        url={page.url}
        subdomain={canonicalSubdomain}
        authorLink={page?.author?.socials?.twitter ?? ''}
      />
      <MetaBlock.Schema schema={schemaPerson} />
      <MetaBlock.Schema schema={schemaBreadcrumbs} />
      <MetaBlock.Schema schema={schemaArticle} />
      {page?.schemaOrg && (
        <MetaBlock.Schema schema={page.schemaOrg} />
      )}
    </>
  );
};

export default MetaTagsArticle;
