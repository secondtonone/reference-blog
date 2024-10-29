/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { SearchPage } from '.';

import {
  BoxAdaptive, Container, TextContent, List
} from '~/components/atoms';
import ArticlesList from '~/components/containers/articles-list';

import fixtureArticles from '~/__fixtures__/articles';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

jest.mock('next/router', () => ({
  events: {
    on: jest.fn()
  },
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    };
  },
}));

describe('Match snapshots SearchPage', () => {
  it('with result', () => {
    const articlesProps = {
      articles: fixtureArticles,
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
      horizontal: true,
      noShare: true,
      largeCount: 0,
      buttonText: 'More articles'
    };

    const { asFragment } = render(
      <SearchPage
        text="google"
        param="blog"
        title="Search results for"
        content={(
          <BoxAdaptive pb={{ _: 90, x: 130, md: 120 }}>
            <ArticlesList {...articlesProps} />
          </BoxAdaptive>
          )}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('no result', () => {
    const suggestions = [
      'Ensure words are spelled correctly.',
      'Try rephrasing keywords or using synonyms.',
      'Try more general keywords.',
      'Make your queries as concise as possible.'
    ];

    const { asFragment } = render(
      <SearchPage
        text="fff"
        param="blog"
        title="No results found for"
        content={(
          <BoxAdaptive pb={{ _: 240, x: 249, md: 318 }}>
            <Container>
              <TextContent
                fontSize={{ _: 5, sm: 8 }}
                fontWeight={{ _: 'accent' }}
                accentFont
                mt={{ _: 45, xm: 60, sm: 65 }}
                mb={{ _: 16, xm: 24 }}
                as="h2"
              >
                Suggestions:
              </TextContent>
              <List data-test="suggestions-list" items={suggestions} />
            </Container>
          </BoxAdaptive>
            )}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
