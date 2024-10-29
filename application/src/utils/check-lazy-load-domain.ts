const domains = ['example', 'googleapis'];

const checkLazyLoadDomain = (url) => domains.some(domain => url.includes(domain));

export default checkLazyLoadDomain;
