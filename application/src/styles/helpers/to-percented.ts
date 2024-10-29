const translateKeys = (obj) => Object.keys(obj).reduce((acc, key) => {
  acc[key] = `${obj[key] * 100}%`;
  return acc;
}, {});

const ToPercented = (sizes) => sizes.map((column) => translateKeys(column));

export default ToPercented;
