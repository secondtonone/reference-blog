export enum CategoryTemplateNames {
  CATEGORY_DEFAULT = 'category-default',
  CATEGORY_GROUPS = 'category-groups',
  SUBCATEGORY_DEFAULT = 'subcategory-default',
  SUBCATEGORY_GROUPS = 'subcategory-groups',
}

export type CategoryTemplateName = keyof typeof CategoryTemplateNames;

export type CategoryTemplate = typeof CategoryTemplateNames[CategoryTemplateName];

export default CategoryTemplate;
