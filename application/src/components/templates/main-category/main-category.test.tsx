/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import MainCategoryPage from './main-category';

import fixtureCategories from '~/__fixtures__/categories';
import fixtureSubcategories from '~/__fixtures__/subcategories';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots MainCategoryPage', () => {
  it('default', () => {
    const pageProps = {
      categoryFields: {
        ...fixtureCategories[0],
        name: 'SEO',
        description: 'The latest search industry news and major events happening in SEO - including Google updates and announcements. You can also find our unique data studies content, case studies and a few search-related quizzes and games.'
      },
      groups: fixtureSubcategories,
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
    };

    const { asFragment } = render(
      <MainCategoryPage {...pageProps} />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
