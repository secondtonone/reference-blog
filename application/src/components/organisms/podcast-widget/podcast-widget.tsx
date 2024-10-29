import { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BoxAdaptive, TextContent, Image } from '~/components/atoms';
import PromoWidget from '~/components/containers/promo-widget';
import getScheme from '~/styles/scheme/scheme';
import { sendAnalyticEvent } from '~/analytics';

import { PodcastViewModel } from '~/view-model';

const lightTheme = getScheme();

const urlToPodcasts = 'https://www.example.com/podcast/';

const PodcastWidget: React.FC<PodcastViewModel> = ({
  title,
  body,
  releaseDate
}) => {
  const podcastAnalyticsClickHandler = useCallback(() => {
    sendAnalyticEvent('banner-podcast-click', {
      label: title
    });
  }, [title]);

  return (
    <PromoWidget.Container
      data-test="podcast"
      title={title}
      label="New Podcast"
      body={body}
      date={releaseDate}
      image={(
        <PromoWidget.Image
          width={{ _: 120, xm: 174, md: 310 }}
          height={{ _: 120, xm: 174, md: 310 }}
          display={{ _: 'inline-flex' }}
          alt={title}
          link={urlToPodcasts}
          image="https://static.example.com/blog-next-static/podcasts/marketing-scoop.png"
          data-test="podcast-image"
          imgWidth="310"
          imgHeight="310"
        />
      )}
      headerContent={(
        <TextContent level={0} ml={{ xm: 6 }} mt={{ _: 2, xm: 0 }} data-test="podcast-duration">24 min</TextContent>
      )}
      footerContent={(
        <ButtonsStyled pt={{ _: 6, x: 7, md: 10 }} display="flex">
          <BadgeStyled
            width={{ _: 125, x: 136 }}
            height={{ _: 35, x: 38 }}
            data-test="podcast-badge-apple"
          >
            <Link href="https://podcasts.apple.com/us/podcast/marketing-scoop-podcast/id1360863632?mt=2">
              <a target="_blank" data-test="podcast-link-apple">
                <Image isLazy src="https://static.example.com/blogxt-static/podcasts/podcast-badge-apple.svg" alt="apple badge" />
              </a>
            </Link>
          </BadgeStyled>
          <BadgeStyled
            width={{ _: 100, x: 108, sm: 136 }}
            height={{ _: 35, x: 38 }}
            data-test="podcast-badge-google"
          >
            <Link href="https://podcasts.google.com/search/marketing%20scoop">
              <a
                target="_blank"
                data-test="podcast-link-google"
                role="link"
                onClick={podcastAnalyticsClickHandler}
              >
                <TextContent padding="0 10px" display="flex" alignItems="center">
                  <Image width="125" isLazy src="https://static.example.com/blogxt-static/podcasts/podcast-badge-google.svg" alt="google badge" />
                </TextContent>
              </a>
            </Link>
          </BadgeStyled>
          <BadgeStyled
            width={{
              _: 43, xm: 138, sm: 148, md: 138
            }}
            height={{ _: 35, x: 38 }}
            data-test="podcast-badge-show-more"
          >
            <Link href="https://www.example.com/podcast/">
              <a target="_blank" data-test="podcast-link-show-more">
                <TextContent
                  fontSize={{ xm: 2 }}
                  display={{ _: 'none', xm: 'inline-flex' }}
                  ml={20}
                >
                  Show more
                </TextContent>
                <Image isLazy src="https://static.example.com/blogxt-static/podcasts/podcast-arrow-more.svg" alt="badge" />
              </a>
            </Link>
          </BadgeStyled>
        </ButtonsStyled>
      )}
    />
  );
};

const ButtonsStyled = styled(BoxAdaptive)`
  > * + * {
    margin-left: 12px;
  }
`;

const BadgeStyled = styled(BoxAdaptive)`
  background: ${lightTheme.opposed};
  text-align: center;
  padding: 1.5px 0;
  border-radius: 5px;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
    pointer-events: none;
  }
`;

export default PodcastWidget;
