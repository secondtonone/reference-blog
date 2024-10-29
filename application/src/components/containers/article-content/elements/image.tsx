/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import { attributesToProps } from 'html-react-parser';
import { MarkupHandler } from './types';
import ImageZoom from '~/components/containers/image-zoom';
import imageResize from '~/utils/image-resize';

const image: MarkupHandler = [
  (domNode) => domNode.name === 'img',
  (domNode) => {
    const {
      'data-src': src,
      width,
      'data-original': original,
    }: {
      'data-src': string;
      width: string;
      'data-original': string;
    } = domNode.attribs;
    const props = attributesToProps(domNode.attribs);

    if (domNode?.parent?.name) {
      domNode.parent.name = 'span';
    }

    if (+width <= 400) {
      const { alt, ...params } = props;

      return <img {...params} alt={alt} />;
    }

    props.className = `${props.className} zooming`;

    if (domNode?.parent?.name !== 'picture') {
      const resizedImg = imageResize({ width: 1010, src })?.src;

      if (resizedImg) {
        props['data-src'] = resizedImg;
      }
    }

    const link = original || src;
    const endsWithGif = src.endsWith('.gif');
    const endsWithMp4 = link.endsWith('.mp4');

    return (
      <>
        <ImageZoom {...props} src={endsWithGif ? src || link : link}>
          {(onClick, imgRef) => <img {...props} onClick={onClick} ref={imgRef} />}
        </ImageZoom>
        {(endsWithGif || endsWithMp4) && (
          <div className="gif-marker">
            <span>GIF</span>
          </div>
        )}
      </>
    );
  },
];

export default image;
