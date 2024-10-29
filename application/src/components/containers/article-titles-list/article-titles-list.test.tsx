/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import pages from '~/__fixtures__/article-titles-list';

import ArticleTitlesList, { IArticleTitlesListProps } from '.';

const articleTitlesListProps: IArticleTitlesListProps = {
  pages,
};

describe('Match snapshots ArticleTitlesList', () => {
  let props: IArticleTitlesListProps;

  beforeEach(() => {
    props = { ...articleTitlesListProps };
  });

  it('default', () => {
    const { asFragment } = render(
      <ArticleTitlesList
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without pages', () => {
    delete props.pages;
    const { asFragment } = render(
      <ArticleTitlesList
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should show a current title', () => {
    const title = 'How to Improve SEO Rankings in 11 Steps';
    const { asFragment } = render(
      <ArticleTitlesList
        {...props}
        title={title}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
