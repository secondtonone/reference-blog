/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import ArticleTitlesList from '.';
import pages from '~/__fixtures__/article-titles-list';

const ArticleTitlesListProps = {
  pages,
};

describe('ArticleTitlesList', () => {
  it('default', () => {
    const { getByTestId } = render(
      <ArticleTitlesList
        {...ArticleTitlesListProps}
      />,
      {}
    );

    expect(getByTestId('article-titles-list')).toBeInTheDocument();
    expect(getByTestId('article-titles-list-title')).toBeInTheDocument();
    expect(getByTestId('article-titles-list-list')).toBeInTheDocument();
  });

  it('should show current title', () => {
    const title = 'How to Improve SEO Rankings in 11 Steps';
    const props = { ...ArticleTitlesListProps };
    const { getByText } = render(
      <ArticleTitlesList
        {...props}
        title={title}
      />,
      {}
    );

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should show links', () => {
    const { getAllByRole } = render(
      <ArticleTitlesList
        {...ArticleTitlesListProps}
      />,
      {}
    );
    const links = getAllByRole('link');
    const { pages: pagesProps } = ArticleTitlesListProps;
    expect(links).toHaveLength(pagesProps.length);

    pagesProps.forEach((page, index) => {
      const link = links[index];
      expect(link).toHaveAttribute('href', `/${page.url}`);
      expect(link).toHaveAttribute('title', page.title);
      expect(link).toHaveTextContent(page.title);
    });
  });
});
