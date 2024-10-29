/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureCategories from '~/__fixtures__/categories';
import fixturePodcast from '~/__fixtures__/podcast';

import CategoryPage from './parent';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/',
      query: {
        page: 1
      }
    };
  },
}));

const pageProps = {
  categoryFields: {
    ...fixtureCategories[0],
    children: [
      fixtureCategories[1],
      fixtureCategories[2]
    ]
  },
  articles: fixtureArticles,
  breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  podcast: fixturePodcast
};

describe('Match snapshots CategoryPage', () => {
  it('default', () => {
    const { asFragment } = render(<CategoryPage {...pageProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('hideSubscribe', () => {
    const { asFragment } = render(<CategoryPage {...{ ...pageProps, hideSubscribe: true }} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('CategoryPage', () => {
  it('should show category', () => {
    const { getByTestId } = render(<CategoryPage {...pageProps} />, {});
    expect(getByTestId(`articles-list-on-page-${fixtureCategories[0].name}`)).toBeInTheDocument();
  });

  it('should show name', () => {
    const { getByTestId } = render(<CategoryPage {...pageProps} />, {});
    expect(getByTestId(/category-title/)).toBeInTheDocument();
  });

  it('should show all title description', () => {
    const { getAllByTestId } = render(<CategoryPage {...pageProps} />, {});
    expect(getAllByTestId('description')).toHaveLength(fixtureArticles.length);
  });

  it('should show list articles', () => {
    const { getAllByTestId } = render(<CategoryPage {...pageProps} />, {});
    expect(getAllByTestId(/post-card-item/)).toHaveLength(fixtureArticles.length);
  });
});
