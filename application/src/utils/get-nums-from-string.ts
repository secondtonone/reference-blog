const getNumsFromString = (...args) => args?.map(arg => arg.match(/\d+/gi)?.join(',')).join(',');

export default getNumsFromString;
