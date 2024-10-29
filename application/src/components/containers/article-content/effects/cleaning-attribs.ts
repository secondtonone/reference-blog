import { EffectHandler } from './types';

const cleanAttribs = new Set(['onerror']);

const cleaningAttribs: EffectHandler = [
  (domNode) => !!domNode?.attribs,
  (domNode) => {
    Object.keys(domNode.attribs).forEach((attr) => {
      if (cleanAttribs.has(attr)) {
        delete domNode.attribs[attr];
      }
    });

    return domNode;
  }
];

export default cleaningAttribs;
