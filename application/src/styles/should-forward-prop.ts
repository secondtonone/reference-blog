const whiteListedProps = [
  'children',
  'as',
  'data-test',
  'data-parse',
  'id',
  'title'
];

const shouldForwardProp = prop => new Set(whiteListedProps).has(prop);

export default shouldForwardProp;
