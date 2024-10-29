import { useCallback, useState, useMemo } from 'react';
import { WidthProps, HeightProps } from 'styled-system';
import {
  BoxAdaptive,
  LinkText,
  TextContent
} from '~/components/atoms';
import PromoWidget from '~/components/containers/promo-widget';
import { PromoViewModel } from '~/view-model';
import IntersectionContainer from '~/components/containers/intersection-container';
import isServer from '~/constants/is-server';
import { sendAnalyticEvent } from '~/analytics';
import { useResize } from '~/hooks';

const PromotionWidget: React.FC<PromoViewModel> = ({
  title,
  body,
  link,
  background,
  image = 'https://static.example.com/blog-next-static/banners/illustration-show-2.svg',
  textLink = 'Read Now',
  headerContent,
  textLimit,
  analyticEventOnShown = 'banner-promo-shown',
  analyticEventOnClick = 'banner-promo-click',
  label = 'New',
  labelBackgroundColor,
  labelColor,
  titleColor,
  bodyColor,
  isImageCorner,
  imageWidth,
  imageHeight,
  imagesBySizes,
  textContentWidth,
  imgTop,
  imgRight,
  imgLeft,
  imgBottom
}) => {
  // @ts-ignore
  const [width, setWidth] = useState(isServer ? 0 : window?.innerWidth);
  const promoAnalyticsHandler = useCallback(() => {
    sendAnalyticEvent(analyticEventOnShown, {
      label: title
    });
  }, [title, analyticEventOnShown]);

  const promoAnalyticsClickHandler = useCallback(() => {
    sendAnalyticEvent(analyticEventOnClick, {
      label: title
    });
  }, [title, analyticEventOnClick]);

  const PromoWidgetImageWidth: WidthProps['width'] = imageWidth || { _: 160, sm: 200, md: 260 };
  const PromoWidgetImageHeight: HeightProps['height'] = imageHeight || { _: 125, sm: 165, md: 250 };

  const handeWindowResize = useCallback(() => {
    if (!isServer) {
      if (width !== window?.innerWidth) setWidth(window?.innerWidth);
    }
  }, [width]);

  useResize(handeWindowResize);

  image = useMemo(() => {
    if (!isServer && Array.isArray(imagesBySizes) && imagesBySizes.length > 0) {
      for (const imageBySize of imagesBySizes) {
        if (imageBySize?.constructor === Object) {
          const { min, max, url } = imageBySize;
          if (image !== url && min < width && width < max) {
            return url;
          }
        }
      }
    }
    return image;
  }, [image, width, imagesBySizes, isServer]);

  return (
    <IntersectionContainer
      once
      onIntersection={promoAnalyticsHandler}
    >
      <PromoWidget.Container
        data-test="promo-widget"
        title={title}
        label={label}
        body={body}
        link={link}
        textLimit={textLimit}
        isYoutube
        fullWidth
        onClick={promoAnalyticsClickHandler}
        background={background}
        labelBackgroundColor={labelBackgroundColor}
        labelColor={labelColor}
        titleColor={titleColor}
        bodyColor={bodyColor}
        isImageCorner={isImageCorner}
        textContentWidth={textContentWidth}
        image={(
          <PromoWidget.Image
            width={PromoWidgetImageWidth}
            height={PromoWidgetImageHeight}
            display={{ _: 'inline-flex' }}
            alt={title}
            link={link}
            image={image}
            onClick={promoAnalyticsClickHandler}
            data-test="promo-image"
            borderRadius="11px"
            imgWidth="310"
            imgHeight="270"
            imgTop={imgTop}
            imgRight={imgRight}
            imgLeft={imgLeft}
            imgBottom={imgBottom}
          />
      )}
        headerContent={headerContent ?? (
          <TextContent
            level={0}
            ml={{ xm: 6 }}
          >
            Read on
            {' '}
            <a
              href="https://www.example.com/blog/category/seo-reality-show/"
              aria-label={title}
              onClick={promoAnalyticsClickHandler}
              target="_blank"
              rel="noreferrer"
            >
              <TextContent
                level={0}
                fontWeight="bold"
              >
                Blog
              </TextContent>
            </a>
          </TextContent>
        )}
        footerContent={(
          <BoxAdaptive pt={{ _: 20 }} display="flex">
            <LinkText
              onClick={promoAnalyticsClickHandler}
              href={link}
              currentColor
              title={title}
            >
              {textLink}
            </LinkText>
          </BoxAdaptive>
      )}
      />
    </IntersectionContainer>
  );
};

export default PromotionWidget;
