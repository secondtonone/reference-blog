const composeMetaDescription = (
  description = '',
  currentPage: string | number | string [] = 0
) => `${description}${currentPage > 1 ? ` - Page ${currentPage}` : ''}`;

export default composeMetaDescription;
