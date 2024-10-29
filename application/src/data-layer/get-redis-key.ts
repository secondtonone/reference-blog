import { SubdomainsViewModel } from '~/view-model';

interface Props {
  subdomain: SubdomainsViewModel,
  currentPage?: number,
  category?: string | string[],
  subcategory?: string | string[],
  slug?: string,
  authorId?: string | number,
}

const getRedisKey = ({
  subdomain,
  currentPage = 0,
  category,
  subcategory,
  slug,
  authorId,
}:Props) => ({
  MAIN_PAGE_TOP: `page-${subdomain}-blog/main-articles-top`,
  MAIN_PAGE_LIST: `page-${subdomain}-blog/main-articles-list/page-${currentPage}`,
  MAIN_PAGE_EDITORS_CHOICE: `page-${subdomain}-blog/main-articles-editors-choice`,
  MAIN_PAGE_CATEGORY_ARTICLES: `page-${subdomain}-blog/main-articles-category-${category}`,
  CATEGORY: `category-${subdomain}-blog/${category}`,
  SUBCATEGORY: `category-${subdomain}-blog/${category}/${subcategory}`,
  SUBCATEGORIES: `subcategories-${subdomain}-blog/${category}`,
  ARTICLE: `page-${subdomain}-blog/${slug}`,
  RELATED: `related-articles-${subdomain}-blog/${slug}`,
  CATEGORY_ARTICLES_TOP: `page-${subdomain}-blog/category/${category}/articles-top`,
  CATEGORY_ARTICLES_LIST: `page-${subdomain}-blog/category/${category}/articles-list${currentPage ? `/page-${currentPage}` : ''}`,
  SUBCATEGORY_ARTICLES_TOP: `page-${subdomain}-blog/category/${category}/${subcategory}/articles-top`,
  SUBCATEGORY_ARTICLES_LIST: `page-${subdomain}-blog/category/${category}/${subcategory}/articles-list${currentPage ? `/page-${currentPage}` : ''}`,
  AUTHOR: `page-${subdomain}-blog/user/${authorId}`,
  AUTHOR_ARTICLES_LIST: `page-${subdomain}-blog/user/${authorId}/articles-list${currentPage ? `/page-${currentPage}` : ''}`,
});

export default getRedisKey;
