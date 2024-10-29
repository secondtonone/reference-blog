/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { getScheme } from '~/styles/scheme';

import { shareUrlGenerators } from '~/utils';

import { ArticleBase } from '.';

import fixturePage from '~/__fixtures__/page';
import fixtureArticles from '~/__fixtures__/articles';
import fixtureEbook from '~/__fixtures__/ebook';

const pageProps = {
  page: fixturePage,
  articles: fixtureArticles,
  breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  articlesMore: fixtureArticles,
  ebook: fixtureEbook,
  isBot: true,
  isUser: false
};

const headings = [
  {
    textContent: 'Lead Generation Strategies for Marketing Agencies',
    id: 'lead-generation-strategies-for-marketing-agencies',
    tagName: 'H2'
  },
  {
    textContent: 'Social Media',
    id: 'social-media',
    tagName: 'H3'
  },
  {
    textContent: 'LinkedIn',
    id: 'linkedin',
    tagName: 'H4'
  },
  {
    textContent: 'Chatbots',
    id: 'email',
    tagName: 'H2'
  }
];

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/test-article'
    };
  },
}));

jest.spyOn(document, 'querySelector').mockImplementation(() => ({
  // @ts-ignore
  querySelectorAll: () => headings,
  addEventListener: () => ({}),
}));

describe('Match snapshots ArticleBase', () => {
  it('default', () => {
    const theme = getScheme();

    const { asFragment } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...pageProps} />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('hideSubscribe', () => {
    const theme = getScheme();

    const { asFragment } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...{ ...pageProps, hideSubscribe: true }} />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ArticleBase', () => {
  it('should show share block', () => {
    const theme = getScheme();

    const { getByTestId } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...pageProps} />
      </ThemeProvider>, {}
    );

    expect(getByTestId('share-block')).toBeInTheDocument();
  });

  it('should show share block description', () => {
    const theme = getScheme();

    const { getByTestId } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...pageProps} />
      </ThemeProvider>, {}
    );

    expect(getByTestId('share-block-description')).toBeInTheDocument();
  });

  it('should show share block with a link text', () => {
    const theme = getScheme();

    const { getAllByTestId } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...pageProps} />
      </ThemeProvider>, {}
    );

    expect(getAllByTestId(/share-block-link-text-/)).toHaveLength(Object.keys(shareUrlGenerators).length);
  });

  it('should show share block witch a link text exactly name', () => {
    const theme = getScheme();

    const { getByTestId } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <ArticleBase {...pageProps} />
      </ThemeProvider>, {}
    );

    for (const key of Object.keys(shareUrlGenerators)) {
      const testId = `share-block-link-text-${key}`;
      expect(getByTestId(testId)).toBeInTheDocument();
    }
  });
});
