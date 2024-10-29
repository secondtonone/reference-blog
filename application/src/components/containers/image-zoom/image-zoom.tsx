import React, {
  useCallback, useRef, useState, useEffect
} from 'react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom-ssr';
import styled from 'styled-components';
import { Button, BoxAdaptive } from '~/components/atoms';
import Backdrop from '~/components/containers/backdrop';
import SvgIcon from '~/components/containers/svg-icon';
import { x, sm } from '~/styles/scheme/breakpoints';
import { sendAnalyticEvent } from '~/analytics';
import { contentSizes } from '~/styles';
import { useKeyboard, useLockScroll } from '~/hooks';

interface ActionProps {
  x: number,
  y: number,
  scale: number
}

export interface ImageZoomProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string
  alt?: string

  width?: number
  naturalWidth?: number
  naturalHeight?: number
  onClose?: () => void
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  src, alt = '', width = contentSizes.wide, naturalHeight, naturalWidth, onClose
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [isZoomStarted, setZooming] = useState<boolean>(false);

  const onZoomStart = useCallback(() => {
    if (!isZoomStarted) setZooming(true);
  }, [isZoomStarted]);

  const onUpdate = useCallback((props : ActionProps) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue((Object.keys(props) as Array<keyof ActionProps>)
        .reduce(
          (acc, prop) => ({ ...acc, [prop]: Number.parseFloat(props[prop].toFixed(3)) }),
          {} as ActionProps
        ));

      img.style.setProperty('transform', value);
    }
  }, [onZoomStart]);

  const onZoomUpdate = useCallback(() => {
    onZoomStart();
  }, [onZoomStart]);

  const show = useCallback(() => {
    setVisibility(true);
    sendAnalyticEvent('article-image_zoom');
  }, []);

  const onCloseZoom = useCallback(() => {
    setVisibility(false);
    setZooming(false);
    if (typeof onClose === 'function') onClose();
  }, [onClose]);

  useKeyboard('Escape', onCloseZoom);

  const onCloseByBackground = useCallback((e) => {
    if (e.target.tagName === 'DIV') onCloseZoom();
  }, [onCloseZoom]);

  useLockScroll(isVisible);

  useEffect(() => {
    if (src) {
      show();
    } else {
      onCloseZoom();
    }
  }, [src]);

  const imageWidth = width > contentSizes.wide ? contentSizes.wide : width;
  const isAnimated = src?.endsWith('.mp4');

  return (
    <>
      {isVisible ? (
        <Backdrop data-test="zoom-popup" height="100vh" transparent zIndex="1001">
          <CloseButton position="fixed" width="auto">
            <Button
              style={{ minWidth: '' }}
              data-test="zoom-popup-close"
              use="tertiary"
              onClick={onCloseZoom}
              noborder
            >
              <SvgIcon size={[20, 20]} code="close" />
            </Button>
          </CloseButton>
          <StyledBackground
            onClick={onCloseByBackground}
            isZoomStarted={isZoomStarted}
            isAnimated={src.endsWith('.mp4')}
            width={naturalWidth}
            height={naturalHeight}
          >
            <QuickPinchZoom
              onUpdate={onUpdate}
              inertia={false}
              onZoomUpdate={onZoomUpdate}
              shouldInterceptWheel={() => false}
            >
              {isAnimated ? (
                <video muted loop autoPlay>
                  <source
                    src={src}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  width={imageWidth}
                  alt={`Zoomed ${alt}`}
                  ref={imgRef}
                  src={src}
                  data-test="zoom-popup-zoomed-image"
                />
              )}
            </QuickPinchZoom>
          </StyledBackground>
        </Backdrop>
      ) : null}
    </>
  );
};

const StyledBackground = styled.div<{ isZoomStarted: boolean, width: number, height: number, isAnimated: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  max-width: 1010px;
  margin: 0 auto;

  @media (min-width: ${sm}) {
    padding: 0;
  }

  & div {
    height: ${({ height }) => (height ? `${Math.round(height * 0.8)}px` : 'auto')};
    max-height: 80%;
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    border: 0;
    box-sizing: border-box;

    @media (min-width: ${x}) {
      border-radius: 10px !important;
    }

    @media (min-width: ${sm}) {
      width: ${({ width }) => (width ? `${width * 0.8}px` : 'auto')};
      border: 1px solid ${({ theme }) => (theme.isLight ? theme.secondary3 : theme.secondary2)} !important;
      border-radius: 5px !important;
    }

    & img {
      cursor: grab;
      border: 1px solid ${({ theme }) => (theme.isLight ? theme.secondary3 : theme.secondary2)} !important;
      border-radius: 5px !important;

      @media (min-width: ${sm}) {
        border: 0 !important;
      }
    }
  }

  video {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled(BoxAdaptive)`
  top: 15px;
  right: 15px;
  z-index: 1002;

  @media (min-width: ${x}) {
    right: 25px;
  }

  @media (min-width: ${sm}) {
    top: 25px;
    right: 45px;
  }
`;

export default ImageZoom;
