const dropWrappedSlashes = (url: string) => url.split('/').filter(part => part).join('/');

export default dropWrappedSlashes;
