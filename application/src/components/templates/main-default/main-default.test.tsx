/**
 * @jest-environment jsdom
 */

import { render, act } from '@testing-library/react';

import { MainDefault } from '.';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureSlides from '~/__fixtures__/slides';
import fixtureCategories from '~/__fixtures__/categories';
import fixturePodcast from '~/__fixtures__/podcast';
import fixtureEbook from '~/__fixtures__/ebook';
import fixturePage from '~/__fixtures__/page';

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

const subdomain = 'en' as const;

const pageProps = {
  page: fixturePage,
  previewCard: fixtureSlides[0],
  bigCards: fixtureSlides,
  categories: fixtureCategories,
  articles: fixtureArticles,
  breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  subdomain,
  isBot: true,
  isUser: false,
  podcast: fixturePodcast,
  editors: fixtureArticles,
  seo: fixtureArticles,
  marketing: fixtureArticles,
  contentMarketing: fixtureArticles,
  ebook: fixtureEbook
};

describe('Match snapshots MainDefault', () => {
  it('default', async () => {
    await act(async () => {
      const { asFragment } = render(
        <MainDefault {...{
          ...pageProps
        }}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('hideSubscribe', async () => {
    await act(async () => {
      const { asFragment } = render(
        <MainDefault {...{
          ...pageProps,
          hideSubscribe: true,
          isBot: false
        }}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('user device', async () => {
    await act(async () => {
      const { asFragment } = render(
        <MainDefault {...{
          ...pageProps,
          hideSubscribe: true,
          isBot: false,
          isUser: true
        }}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
