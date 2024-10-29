/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixtures from '~/__fixtures__/article-cards';
import { IArticleCardProps } from '~/components/organisms/article-card';

import ArticleCardsList from '.';

const articleCardsListProps = {
  articles: [...fixtures] as Array<IArticleCardProps>,
};

describe('Match snapshots ArticleCardsList', () => {
  it('default', () => {
    const { asFragment } = render(<ArticleCardsList {...articleCardsListProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('empty', () => {
    const { asFragment } = render(<ArticleCardsList />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
