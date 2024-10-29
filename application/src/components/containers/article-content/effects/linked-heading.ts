import { nanoid } from 'nanoid';
import { EffectHandler } from './types';
import headingsLevels from '~/constants/headings-levels';

const linkedHeading: EffectHandler = [
  (domNode) => (
    !(domNode?.attribs?.id?.trim()) && headingsLevels.includes(domNode.name?.toUpperCase())
  ),
  (domNode) => {
    let element = domNode;

    while (element?.type !== 'text' && element?.children) {
      // eslint-disable-next-line prefer-destructuring
      element = element.children[0];
    }

    if (typeof element !== 'undefined' && typeof element?.data === 'string') {
      domNode.attribs.id = element
        .data
        .replace(/[!.?\u00A0]/g, ' ')
        .trim()
        .toLocaleLowerCase()
        .replace(/\s/g, '-');
    } else {
      domNode.attribs.id = nanoid();
    }

    return domNode;
  }
];

export default linkedHeading;
