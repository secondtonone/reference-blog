/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import page from '~/__fixtures__/page';
import PageContext from '~/contexts/page-context';
import DomainBlock from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/sp-500',
      query: { page: 1 }
    };
  },
}));

describe('Match snapshots DomainBlock', () => {
  it('default', () => {
    const { asFragment } = render(
      <PageContext.Provider value={{ page: { ...page, url: 'blog/sp-500' } }}>
        <DomainBlock />
      </PageContext.Provider>, {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
