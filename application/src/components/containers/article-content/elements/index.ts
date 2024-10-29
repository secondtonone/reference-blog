import elements from './elements';

const makeElements = (domNode: any) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [condition, handler] of elements) {
    if (condition(domNode)) return handler(domNode);
  }

  return domNode;
};

export default makeElements;
