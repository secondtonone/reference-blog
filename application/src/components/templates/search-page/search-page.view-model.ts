import {
  ArticlesViewModel,
  BreakpointViewModel,
  CanonicalSubdomainViewModel,
  CategoryTreeViewModel
} from '~/view-model';

interface SearchPageViewModel {
  canonicalSubdomain?: CanonicalSubdomainViewModel,
  breakpoint?: BreakpointViewModel,
  id?: number,
  articles?: ArticlesViewModel,
  total?: number,
  categoriesTree?: CategoryTreeViewModel,
  text: string,
  title: React.ReactNode,
  param: string,
  content: React.ReactNode
}

export default SearchPageViewModel;
