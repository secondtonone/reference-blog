import { EffectHandler, Effect } from './types';

const lazyLoadingHandler: Effect = (domNode) => {
  domNode.attribs.class = `lazyload ${domNode.attribs.class ? domNode.attribs.class : ''}`;
  const { src } = domNode.attribs;
  domNode.attribs['data-src'] = src;
  domNode.attribs.src = null;

  if (!domNode.attribs.loading) {
    domNode.attribs.loading = 'lazy';
  }

  if (domNode.attribs.srcset) {
    const { srcset } = domNode.attribs;
    domNode.attribs['data-srcset'] = srcset;
    domNode.attribs.srcset = null;
  }

  return domNode;
};

const elementsMap: {
  [key: string]: Effect
} = {
  img: lazyLoadingHandler
};

const performingImage: EffectHandler = [
  (domNode) => !!elementsMap[domNode.name],
  (domNode) => elementsMap[domNode.name](domNode)
];

export default performingImage;
