/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import SubcategoryPage from './child';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureCategories from '~/__fixtures__/categories';

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

describe('Match snapshots SubcategoryPage', () => {
  it('default', () => {
    const pageProps = {
      categoryFields: {
        ...fixtureCategories[1],
        parent: {
          ...fixtureCategories[0],
          children: [
            fixtureCategories[2],
            fixtureCategories[3]
          ]
        }
      },
      articles: fixtureArticles,
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
      subcategory: fixtureCategories[1].slug
    };

    const { asFragment } = render(
      <SubcategoryPage {...pageProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
