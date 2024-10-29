import { useCallback } from 'react';
import styled from 'styled-components';
import YoutubeRedM from '@semcore/icon/lib/color/YoutubeRed/m';
import {
  BoxAdaptive,
  LinkText
} from '~/components/atoms';
import PromoWidget from '~/components/containers/promo-widget';
import SvgIcon from '~/components/containers/svg-icon';
import { YoutubeViewModel } from '~/view-model';
import { getScheme } from '~/styles/scheme';
import IntersectionContainer from '~/components/containers/intersection-container';
import { sendAnalyticEvent } from '~/analytics';

const lightTheme = getScheme();

const YoutubeWidget: React.FC<YoutubeViewModel> = ({
  title,
  body,
  link,
  youtube,
  background,
  image = 'https://static.example.com/blog/uploads/files/8d/65/8d65d313450e7b02f3848b823b70c1c9/pic-2.png'
}) => {
  const youtubeAnalyticsHandler = useCallback(() => {
    sendAnalyticEvent('banner-youtube-shown', {
      label: title
    });
  }, [title]);

  const youtubeAnalyticsClickHandler = useCallback(() => {
    sendAnalyticEvent('banner-youtube-click', {
      label: title
    });
  }, [title]);

  return (
    <IntersectionContainer
      once
      onIntersection={youtubeAnalyticsHandler}
    >
      <PromoWidget.Container
        data-test="youtube-widget"
        title={title}
        label="New"
        body={body}
        link={link}
        date="Watch on"
        isYoutube
        fullWidth
        onClick={youtubeAnalyticsClickHandler}
        background={background}
        image={(
          <PromoWidget.Image
            width={{
              _: 160, sm: 200, md: 260
            }}
            height={{
              _: 125, sm: 165, md: 250
            }}
            display={{ _: 'inline-flex' }}
            alt={title}
            link={link}
            image={image}
            onClick={youtubeAnalyticsClickHandler}
            data-test="youtube-image"
            borderRadius="11px"
            imgWidth="310"
            imgHeight="270"
          />
      )}
        headerContent={(
          <a
            href={youtube}
            aria-label={title}
            onClick={youtubeAnalyticsClickHandler}
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle
              data-test="youtube-logo"
              margin={{ _: '5px 0 0 0', sm: '5px' }}
              display="flex"
            >
              <YoutubeRedM />
              <SvgIcon code="youtube-logo" />
            </IconStyle>
          </a>
      )}
        footerContent={(
          <BoxAdaptive pt={{ _: 20 }} display="flex">
            <LinkText
              onClick={youtubeAnalyticsClickHandler}
              href={link}
              currentColor
              title={title}
            >
              Tune-in Now
            </LinkText>
          </BoxAdaptive>
      )}
      />
    </IntersectionContainer>
  );
};

const IconStyle = styled(BoxAdaptive)`
  color: ${lightTheme.opposed};
  gap: 3px;
`;

export default YoutubeWidget;
