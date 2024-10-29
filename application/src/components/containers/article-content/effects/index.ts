import { DOMNode } from 'html-react-parser';
import effects from './effects';

const applyEffects = (domNode: DOMNode) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [condition, handler] of effects) {
    if (condition(domNode)) handler(domNode);
  }

  return domNode;
};

export default applyEffects;
