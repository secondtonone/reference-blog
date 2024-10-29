import { CategoryViewModel } from '~/view-model';

const getMetaDescriptionFromCategory = (category?: CategoryViewModel) => {
  if (!category) return '';

  const { lang, name, metaDescription } = category;
  let description = `Blog about ${name}.`;

  if (lang === 'en' && metaDescription) description = metaDescription;

  return description;
};

export default getMetaDescriptionFromCategory;
