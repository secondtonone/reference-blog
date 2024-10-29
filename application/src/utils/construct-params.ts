const constructParams = (param: string, ...list: Array<string|number>) => `?${param}=${list.join(`&${param}=`)}`;

export default constructParams;
