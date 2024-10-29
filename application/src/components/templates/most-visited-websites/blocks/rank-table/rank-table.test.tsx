/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import RankTable from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/most-visited-websites',
      query: { page: 1 }
    };
  },
}));

describe('Match snapshots RankTable', () => {
  it('default', () => {
    const { asFragment } = render(<RankTable />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
