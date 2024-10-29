/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixtures from '~/__fixtures__/article-cards';

import ArticleCard, { IArticleCardProps } from '.';

const articleCardProps = fixtures[0] as IArticleCardProps;

describe('Match snapshots ArticleCard', () => {
  it('default', () => {
    const { asFragment } = render(<ArticleCard {...articleCardProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('only title', () => {
    const { asFragment } = render(<ArticleCard title={fixtures[0].title} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('without image', () => {
    const { asFragment } = render((
      <ArticleCard {... {
        ...articleCardProps,
        image: undefined,
      }}
      />
    ), {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('without timeToRead', () => {
    const { asFragment } = render((
      <ArticleCard {... {
        ...articleCardProps,
        timeToRead: undefined,
      }}
      />
    ), {});
    expect(asFragment()).toMatchSnapshot();
  });
});
