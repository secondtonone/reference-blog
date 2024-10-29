import { useCallback, useState, FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { getYouTubeId } from '~/utils';
import SvgIcon from '~/components/containers/svg-icon';
import BoxAdaptive from '~/components/atoms/box-adaptive';

const getThumbnail = (id: string, size = 'hq720') => `https://i.ytimg.com/vi/${id}/${size}.jpg`;

export interface YoutubePlaceholderProps {
  src: string
}

const YoutubePlaceholder: FC<YoutubePlaceholderProps> = ({ src }) => {
  const [isSuspended, setSuspending] = useState(true);
  const videoId = getYouTubeId(src);

  const play = useCallback(() => setSuspending(false), [setSuspending]);
  const thumbnail = getThumbnail(videoId, 'hq720');

  if (isSuspended) {
    return (
      <>
        <Head>
          <link rel="preconnect" key="youtube" href="https://www.youtube.com" />
          <link rel="preconnect" key="ytimg" href="https://i.ytimg.com" />
        </Head>
        <Container
          position="relative"
        >
          <img
            className="lazyload youtube-thumbnail"
            height="340"
            alt="Youtube video thumbnail"
            sizes="
              (max-width: 320px) 95vw,
              (max-width: 640px) 95vw,
              calc(100vw - (100vw - 660px))
            "
            data-srcset={`
              ${getThumbnail(videoId, 'mqdefault')} 320w,
              ${getThumbnail(videoId, 'sddefault')} 640w,
              ${thumbnail} 960w`}
            data-src={thumbnail}
          />
          <IconContainer
            position="absolute"
            top="50%"
            left="50%"
            ml="-34px"
            mt="-28px"
          >
            <SvgIcon code="youtube" size={[68, 48]} onClick={play} />
          </IconContainer>
        </Container>
      </>
    );
  }

  return (<iframe allowFullScreen data-consent="analytics" allow="autoplay;accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" height="560" src={`${src}?autoplay=1`} title="YouTube video player" width="1010" />);
};

const IconContainer = styled(BoxAdaptive)`
  display: none;
  opacity: 0;
  cursor: pointer;
  color: #212121;
  transition: opacity 1s ease-in-out 2s;

  &:hover {
    color: #ff0000;
  }
`;

const Container = styled(BoxAdaptive)`
  img[srcset] + div,
  img[src] + div {
    display: block;
    opacity: 1;
  }
`;

export default YoutubePlaceholder;
