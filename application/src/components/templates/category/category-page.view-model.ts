import {
  ArticlesViewModel,
  BreakpointViewModel,
  CanonicalSubdomainViewModel,
  CategoriesTreeViewModel,
  CategoryViewModel,
  PodcastViewModel,
  SubdomainsViewModel,
  SubcategoriesViewModel,
  CategoriesViewModel
} from '~/view-model';
import CategoryTemplate from '~/enums/category-template';

interface CategoryPageViewModel {
  canonicalSubdomain?: CanonicalSubdomainViewModel,
  subdomain?: SubdomainsViewModel,
  breakpoint: BreakpointViewModel,
  categoryFields?: CategoryViewModel | undefined,
  articlesTop?: ArticlesViewModel,
  articles?: ArticlesViewModel,
  tags?: CategoriesViewModel,
  articlesCount?: number,
  podcast?: PodcastViewModel,
  pagedLimit?: number,
  currentPage?: number,
  categoriesTree?: CategoriesTreeViewModel,
  hideSubscribe?: boolean
  hidePromo?: boolean
  subcategories?: SubcategoriesViewModel
  template?: CategoryTemplate
}

export default CategoryPageViewModel;
