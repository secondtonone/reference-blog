import resizer from '@flame/image-resizer/dist/image-resize';

const DOMAIN = 'static.example.com';

type ImageParams = {
  src: string
};

type ResizeParams = {
  height?: number | string,
  width: number | string,
  replaceText?: string
} & ImageParams;

const imageResize = ({
  height,
  width,
  src,
  replaceText = 'fit=scale-down,'
} : ResizeParams): ImageParams => {
  if (src?.includes(DOMAIN)
    && !['cdn-cgi'].some(el => src?.includes(el))) {
    return {
      src: resizer(src, null, +width, +height).replace(replaceText, '')
    };
  }

  return {
    src
  };
};

export default imageResize;
