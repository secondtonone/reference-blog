import { getMetaDescriptionFromCategory, composeMetaDescription } from '~/utils';
import { CategoryViewModel } from '~/view-model';

const categoryFields: CategoryViewModel = {
  name: 'SEO',
  lang: 'en',
  slug: 'seo',
  metaDescription: 'example\'s digital marketing blog',
};

describe('getMetaDescriptionFromCategory', () => {
  it('empty', () => {
    expect(getMetaDescriptionFromCategory()).toBe('');
  });

  it('with en empty metaDescription', () => {
    expect(getMetaDescriptionFromCategory({ ...categoryFields, metaDescription: '' }))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('with de empty metaDescription', () => {
    expect(getMetaDescriptionFromCategory({ ...categoryFields, lang: 'de', metaDescription: '' }))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('with en and metaDescription', () => {
    expect(getMetaDescriptionFromCategory(categoryFields))
      .toBe(categoryFields.metaDescription);
  });

  it('with de and metaDescription', () => {
    expect(getMetaDescriptionFromCategory({ ...categoryFields, lang: 'de' }))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('empty and composeMetaDescription', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory())).toBe('');
  });

  it('empty and composeMetaDescription currentPage 1', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory(), 1)).toBe('');
  });

  it('empty and composeMetaDescription currentPage 3', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory(), 3))
      .toBe(' - Page 3');
  });

  it('with en, metaDescription, composeMetaDescription currentPage 1', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory(categoryFields), 1))
      .toBe(categoryFields.metaDescription);
  });

  it('with en, metaDescription, composeMetaDescription currentPage 3', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory(categoryFields), 3))
      .toBe(`${categoryFields.metaDescription} - Page 3`);
  });

  it('with de, metaDescription, composeMetaDescription currentPage 1', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, lang: 'de' }), 1))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('with de, metaDescription, composeMetaDescription currentPage 3', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, lang: 'de' }), 3))
      .toBe(`Blog about ${categoryFields.name}. - Page 3`);
  });

  it('with en, empty metaDescription, composeMetaDescription currentPage 1', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, metaDescription: '' }), 1))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('with en, empty metaDescription, composeMetaDescription currentPage 3', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, metaDescription: '' }), 3))
      .toBe(`Blog about ${categoryFields.name}. - Page 3`);
  });

  it('with de, empty metaDescription, composeMetaDescription currentPage 1', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, metaDescription: '' }), 1))
      .toBe(`Blog about ${categoryFields.name}.`);
  });

  it('with de, empty metaDescription, composeMetaDescription currentPage 3', () => {
    expect(composeMetaDescription(getMetaDescriptionFromCategory({ ...categoryFields, metaDescription: '' }), 3))
      .toBe(`Blog about ${categoryFields.name}. - Page 3`);
  });
});
