import { SubcategoryViewModel } from '~/view-model';

const composeHrefForCategoryCard: (
  options?: Partial<Pick<SubcategoryViewModel, 'parent' | 'slug'>>
) => string = (options) => {
  const { parent, slug } = options || {};
  let href = '/blog/';

  if (parent?.slug || slug) {
    href = `${href}category/`;

    if (parent?.slug) href = `${href}${parent.slug}/`;

    if (slug) href = `${href}${slug}`;
  }
  return href;
};

export default composeHrefForCategoryCard;
