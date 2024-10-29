const linkConstructor = (url: string, page: number) => (page === 1 ? url.split('?')[0] : `${url.split('?')[0]}?page=${page}`);

export default linkConstructor;
