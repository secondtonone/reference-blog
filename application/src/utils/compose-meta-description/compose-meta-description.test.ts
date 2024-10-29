import { composeMetaDescription } from '~/utils/';

const description = 'example\'s digital marketing blog';

describe('composeMetaDescription', () => {
  it('with description and currentPage 1', () => {
    expect(composeMetaDescription(description, 1)).toBe(description);
  });

  it('with description and currentPage 2', () => {
    expect(composeMetaDescription(description, 2)).toBe(`${description} - Page 2`);
  });

  it('with empty description and currentPage 1', () => {
    expect(composeMetaDescription('', 1)).toBe('');
  });

  it('with empty description and currentPage 2', () => {
    expect(composeMetaDescription('', 2)).toBe(' - Page 2');
  });
});
