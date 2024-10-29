import { EffectHandler } from './types';
import { contentSizes } from '~/styles';
import { getDimensions } from '~/utils';

const functionalImage: EffectHandler = [
  (domNode) => domNode.name === 'img',
  (domNode) => {
    const { height, width = contentSizes.limited } = domNode.attribs;

    if (height && width) {
      const dimensionsProps = getDimensions({
        height: Number(height),
        width: Number(width),
        maxW: contentSizes.wide,
        minW: contentSizes.limited
      });

      domNode.attribs.width = dimensionsProps.width;
      domNode.attribs.height = dimensionsProps.height;
    }

    return domNode;
  }
];

export default functionalImage;
