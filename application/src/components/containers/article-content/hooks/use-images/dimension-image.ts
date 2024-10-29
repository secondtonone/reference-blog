import { contentSizes } from '~/styles';
import { getDimensions } from '~/utils';

const dimensionImage = (image: HTMLImageElement) => {
  const { height, width = contentSizes.limited } = image;

  if (height && width) {
    const dimensionsProps = getDimensions({
      height: Number(height),
      width: Number(width),
      maxW: contentSizes.wide,
      minW: contentSizes.limited
    });

    image.width = dimensionsProps.width;
    image.height = dimensionsProps.height;
  }
};

export default dimensionImage;
