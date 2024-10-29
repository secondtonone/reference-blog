import { useCallback, useEffect, useState } from 'react';
import { useExternalApi } from '~/hooks';
import { BoxAdaptive, TextContent, LinkText } from '~/components/atoms';
import { numberKFormatter, dropTags } from '~/utils';
import { EbookViewModel } from '~/view-model';
import PromoWidget from '~/components/containers/promo-widget';
import IntersectionContainer from '~/components/containers/intersection-container';
import { sendAnalyticEvent } from '~/analytics';

const url = 'https://www.example.com';

const urlToEbooks = `${url}/ebooks/`;

type EbookModel = Partial<Omit<EbookViewModel, 'downloads'> & { downloads: string | number}>;

interface EbookWidgetProps extends EbookModel {
  isYoutube?: boolean
  textLimit?: number
  inArticle?: boolean
}

const EbookWidget: React.FC<EbookWidgetProps> = ({
  title = '',
  description = '',
  previewUrl = '',
  updatedAt = '',
  slug,
  downloads = 0,
  isYoutube = true,
  textLimit = 300,
  inArticle
}) => {
  const [ebookData, setEbookData] = useState<EbookModel>({
    title,
    description,
    downloads,
    updatedAt,
    previewUrl
  });

  const [isError, setError] = useState<boolean>(false);

  const ebookAnalyticsHandler = useCallback(() => {
    sendAnalyticEvent('banner-ebook-shown', {
      label: ebookData.title
    });
  }, [ebookData.title]);

  const ebookAnalyticsClickHandler = useCallback(() => {
    sendAnalyticEvent('banner-ebook-click', {
      label: ebookData.title
    });
  }, [ebookData.title]);

  const { ebook } = useExternalApi(url);

  const link = `${urlToEbooks}${slug}/`;

  useEffect(() => {
    (async () => {
      try {
        const result = await ebook(slug);

        if (result?.title) {
          setEbookData({
            title: result.title,
            description: result.description,
            downloads: Number.isNaN(+result.downloads) && result.downloads.includes('K')
              ? result.downloads
              : numberKFormatter(+result.downloads),
            updatedAt: result.updated_at,
            previewUrl: result.preview
          });
        }
      } catch {
        setError(true);
      }
    })();
  }, []);

  if (isError) {
    return null;
  }

  return (
    <IntersectionContainer
      once
      onIntersection={ebookAnalyticsHandler}
    >
      <PromoWidget.Container
        data-test="ebook"
        isYoutube={isYoutube}
        inArticle={inArticle}
        textLimit={textLimit}
        title={dropTags(ebookData.title)}
        label="New Ebook"
        body={dropTags(ebookData.description)}
        date={ebookData.updatedAt}
        link={link}
        onClick={ebookAnalyticsClickHandler}
        image={(
          <PromoWidget.Image
            width={{ _: 95, xm: 150, md: 190 }}
            height={{ _: 124, xm: 200, md: 265 }}
            display={{ _: 'inline-flex' }}
            alt={ebookData.title}
            link={link}
            image={ebookData.previewUrl}
            data-test="ebook-preview-url"
            onClick={ebookAnalyticsClickHandler}
            imgWidth="190"
            imgHeight="265"
          />
        )}
        headerContent={(
          <TextContent level={0} ml={{ xm: 6 }} mt={{ _: 4, xm: 0 }} lineHeight={1.15} data-test="ebook-downloads">
            {ebookData.downloads && (
              <>
                {ebookData.downloads}
                {' '}
                downloads
              </>
            )}
          </TextContent>
        )}
        footerContent={(
          <BoxAdaptive pt={{ _: 20 }} display="flex">
            <LinkText
              href={link}
              currentColor
              onClick={ebookAnalyticsClickHandler}
            >
              Download now
            </LinkText>
          </BoxAdaptive>
        )}
      />
    </IntersectionContainer>
  );
};

export default EbookWidget;
