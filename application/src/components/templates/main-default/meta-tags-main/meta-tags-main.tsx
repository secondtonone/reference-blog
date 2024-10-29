import MetaBlock from '~/components/blocks/meta-block';
import { dropWrappedSlashes, composeMetaDescription } from '~/utils';
import metaTagsData from './meta-tags-data';

import {
  ArticleViewModel,
  ArticlesViewModel,
  CanonicalSubdomainViewModel
} from '~/view-model';

import { useDataUpdate } from '~/hooks';
import { VisuallyHidden } from '~/components/atoms';

interface Props {
  canonicalSubdomain?: CanonicalSubdomainViewModel,
  currentPage: number,
  previewCard?: ArticleViewModel,
  bigCards?: ArticlesViewModel,
  alternates?: string[][]
}

const MetaTagsMain: React.FC<Props> = ({
  canonicalSubdomain = 'www',
  previewCard,
  bigCards,
  currentPage,
  alternates,
}) => {
  const checkedSubdomain = canonicalSubdomain?.replace('en', 'www') as CanonicalSubdomainViewModel;

  const {
    title,
    description
  } = metaTagsData[checkedSubdomain || 'www'];

  const [metaTitle] = useDataUpdate({
    scheme: [
      ([pageNumber, mainTitle]) => `${pageNumber > 1
        ? `Page ${pageNumber} - ` : ''}${mainTitle}`,
    ],
    deps: [currentPage, title]
  });
  const metaDescription = composeMetaDescription(description, currentPage);

  const asPath = `/blog/${currentPage > 1 ? `?page=${currentPage}` : ''}`;
  const cleanedUrl = dropWrappedSlashes(asPath);
  const canonicalUrl = /\?/.test(asPath) ? cleanedUrl : `${cleanedUrl}/`;

  return (
    <>
      <MetaBlock.Main
        title={`${metaTitle}`}
        description={metaDescription}
        canonical={canonicalUrl}
        subdomain={checkedSubdomain}
      >
        {previewCard?.previewImage && (
          <link rel="preload" as="image" href={previewCard.previewImage} />
        )}
        {Array.isArray(bigCards) && bigCards.length > 0 && (
          bigCards.map(bigCard => (
            bigCard?.previewImage && (
              <link key={bigCard.previewImage} rel="preload" as="image" href={bigCard.previewImage} />
            )
          ))
        )}
      </MetaBlock.Main>
      <MetaBlock.Alternate
        alternates={alternates}
      />
      <VisuallyHidden as="h1">
        {title}
      </VisuallyHidden>
    </>
  );
};

export default MetaTagsMain;
