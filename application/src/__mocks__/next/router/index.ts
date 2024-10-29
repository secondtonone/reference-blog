export default jest.mock('next/router', () => ({
  events: {
    on: jest.fn()
  },
  useRouter() {
    return {
      route: '/',
      pathname: '',
      asPath: '/blog/',
      query: {
        page: 1,
        popup: 'all-tags'
      }
    };
  },
}));
