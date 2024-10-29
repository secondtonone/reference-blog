/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixtures from '~/__fixtures__/article-cards';
import { IArticleCardProps } from '~/components/organisms/article-card';

import ArticleCardsList from '.';

const articleCardsListProps = {
  articles: [...fixtures] as IArticleCardProps[],
};

describe('ArticleCardsList', () => {
  it('default', () => {
    const {
      getByTestId, getAllByTestId
    } = render(<ArticleCardsList {...articleCardsListProps} />, {});

    expect(getByTestId('article-cards-list')).toBeInTheDocument();
    expect(getAllByTestId('article-cards-list-item')).toHaveLength(fixtures.length);
  });

  it('empty', () => {
    const mockFn = jest.fn(() => null);
    const {
      getByTestId, queryAllByTestId
    } = render(<ArticleCardsList renderEmpty={mockFn} />, {});

    expect(getByTestId('article-cards-list')).toBeInTheDocument();
    expect(queryAllByTestId('article-cards-list-item')).toHaveLength(0);
    expect(mockFn).toHaveBeenCalled();
  });
});
