import { imageResize } from '~/utils';

const resizeImage = (image: HTMLImageElement) => {
  if (image.parentElement.tagName !== 'PICTURE') {
    const {
      src
    } = image.dataset;

    const resizedImg = imageResize({ width: 1010, src })?.src;

    if (resizedImg) {
      image.dataset.src = resizedImg;
    }
  }
};

export default resizeImage;
