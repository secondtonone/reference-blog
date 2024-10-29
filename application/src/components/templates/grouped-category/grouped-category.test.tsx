/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import GroupedCategoryPage from './grouped-category';

import fixtureArticles from '~/__fixtures__/articles';
import GroupedCategoryViewModel from '~/components/templates/grouped-category/grouped-category.view-model';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots GroupedCategoryPage', () => {
  it('with large cards', () => {
    const pageProps = {
      categoryFields: {
        slug: 'seo-reality-show',
        lang: 'en',
        name: 'SEO Reality Show',
        description: 'The latest search industry news and major events happening in SEO - including Google updates and announcements. You can also find our unique data studies content, case studies and a few search-related quizzes and games.'
      },
      groups: [
        {
          name: 'First group',
          articles: [fixtureArticles[0], fixtureArticles[1]]
        },
        {
          name: 'Second group',
          articles: [fixtureArticles[2], fixtureArticles[3]]
        }
      ],
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
      largeCount: 4
    } as GroupedCategoryViewModel;

    const { asFragment } = render(
      <GroupedCategoryPage {...pageProps} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('with small cards', () => {
    const pageProps = {
      categoryFields: {
        slug: 'seo-reality-show',
        lang: 'en',
        name: 'SEO Reality Show',
        description: 'The latest search industry news and major events happening in SEO - including Google updates and announcements. You can also find our unique data studies content, case studies and a few search-related quizzes and games.'
      },
      groups: [
        {
          name: 'First group',
          articles: [fixtureArticles[0], fixtureArticles[1]]
        },
        {
          name: 'Second group',
          articles: [fixtureArticles[2], fixtureArticles[3]]
        }
      ],
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
      largeCount: 0
    } as GroupedCategoryViewModel;

    const { asFragment } = render(
      <GroupedCategoryPage {...pageProps} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
