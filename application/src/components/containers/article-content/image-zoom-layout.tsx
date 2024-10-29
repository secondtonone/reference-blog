import ImageZoom, { ImageZoomProps } from '~/components/containers/image-zoom';

export interface ImageZoomLayoutProps extends ImageZoomProps {
  original: string
}

const ImageZoomLayout: React.FC<ImageZoomLayoutProps> = ({
  src = '',
  width,
  original,
  naturalWidth,
  naturalHeight,
  alt,
  onClose,
}) => {
  const link = original || src;
  const endsWithGif = src.endsWith('.gif');

  return (
    <ImageZoom
      src={endsWithGif ? src || link : link}
      alt={alt}
      width={width}
      naturalHeight={naturalHeight}
      naturalWidth={naturalWidth}
      onClose={onClose}
    />
  );
};

export default ImageZoomLayout;
