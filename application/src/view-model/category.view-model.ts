import CategoryTemplate from '~/enums/category-template';

export type BaseCategory = {
  id?: number,
  description?: string,
  metaTitle?: string,
  metaDescription?: string,
  name: string,
  slug: string,
  lang: string,
  template?: CategoryTemplate,
}

interface CategoryViewModel extends BaseCategory {
  parent?: BaseCategory & {
    children: BaseCategory[] | null
  },
  children?: BaseCategory[] | null,
}

export default CategoryViewModel;
