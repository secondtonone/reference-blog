import fixture from '~/__fixtures__/transform-hit-to-article';

import transformHitToArticle, { IHit } from './transform-hit-to-article';

describe('transformHitToArticle', () => {
  const article = transformHitToArticle(fixture as IHit);

  it('with url', () => {
    expect(fixture.source.url).toBe(article.url);
  });

  it('with title', () => {
    expect(fixture.source.title).toBe(article.title);
  });

  it('with preview', () => {
    expect(fixture.source.description).toBe(article.preview);
  });

  it('with previewImage', () => {
    expect(fixture.source.imageUrl).toBe(article.previewImage);
  });

  it('with altPreviewImage', () => {
    expect(fixture.source.altImage).toBe(article.altPreviewImage);
  });

  it('with publishedAt', () => {
    expect(fixture.source.publishedAt).toBe(article.publishedAt);
  });

  it('with category', () => {
    expect(fixture.source.category).toEqual(article.category);
  });
});
