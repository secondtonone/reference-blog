/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixtures from '~/__fixtures__/article-cards';

import ArticleCard, { IArticleCardProps } from '.';

const articleCardProps = fixtures[0] as IArticleCardProps;

describe('ArticleCard', () => {
  it('default', () => {
    const {
      getByTestId, getByRole, getByText, getAllByRole
    } = render(<ArticleCard {...articleCardProps} />, {});

    expect(getByTestId('article-card-link-image')).toBeInTheDocument();
    expect(getByTestId('article-card-image')).toBeInTheDocument();
    expect(getByTestId('article-card-link-title')).toBeInTheDocument();
    expect(getByTestId('article-card-time-to-read')).toBeInTheDocument();
    expect(getByText(articleCardProps.title)).toBeInTheDocument();
    expect(getByText(`${articleCardProps.timeToRead} min read`)).toBeInTheDocument();
    expect(getAllByRole('link').length).toBe(2);

    const imageElement = getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('data-src', articleCardProps.previewImage);
    expect(imageElement).toHaveAttribute('alt', articleCardProps.title);
  });

  it('without title, but has other', () => {
    const {
      queryByTestId, queryByText, getByRole, getByText, getByTestId, getAllByRole
    } = render(
      <ArticleCard {...{
        ...articleCardProps,
        title: undefined,
      }}
      />, {}
    );

    expect(getByTestId('article-card-link-image')).toBeInTheDocument();
    expect(getByTestId('article-card-image')).toBeInTheDocument();
    expect(getByTestId('article-card-time-to-read')).toBeInTheDocument();
    expect(queryByTestId('article-card-link-title')).toBeNull();
    expect(getAllByRole('link').length).toBe(1);

    const imageElement = getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('data-src', articleCardProps.previewImage);
    expect(imageElement).not.toHaveAttribute('alt');

    expect(queryByText(articleCardProps.title)).toBeNull();
    expect(getByText(`${articleCardProps.timeToRead} min read`)).toBeInTheDocument();
  });

  it('without previewImage, but has other', () => {
    const props = { ...articleCardProps };
    delete props.previewImage;
    const {
      queryByTestId, queryByRole, getByText, getAllByRole, getByTestId
    } = render(
      <ArticleCard {...props} />, {}
    );
    expect(queryByTestId('article-card-link-image')).toBeNull();
    expect(queryByTestId('article-card-image')).toBeNull();
    expect(getByTestId('article-card-link-title')).toBeInTheDocument();
    expect(getByTestId('article-card-time-to-read')).toBeInTheDocument();
    expect(queryByRole('img')).toBeNull();
    expect(getByText(articleCardProps.title)).toBeInTheDocument();
    expect(getByText(`${articleCardProps.timeToRead} min read`)).toBeInTheDocument();
    expect(getAllByRole('link').length).toBe(1);
  });

  it('without timeToRead, but has other', () => {
    const props = { ...articleCardProps };
    delete props.timeToRead;
    const {
      queryByTestId, queryByText, getByRole, getByText, getByTestId, getAllByRole
    } = render(
      <ArticleCard {...props} />, {}
    );
    expect(getByTestId('article-card-link-image')).toBeInTheDocument();
    expect(getByTestId('article-card-image')).toBeInTheDocument();
    expect(getByTestId('article-card-link-title')).toBeInTheDocument();
    expect(queryByTestId('article-card-time-to-read')).toBeNull();
    expect(getAllByRole('link').length).toBe(2);
    expect(getByText(articleCardProps.title)).toBeInTheDocument();
    expect(queryByText(`${articleCardProps.timeToRead} min read`)).toBeNull();

    const imageElement = getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('data-src', articleCardProps.previewImage);
    expect(imageElement).toHaveAttribute('alt', articleCardProps.title);
  });
});
