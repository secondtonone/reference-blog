import {
  ArticlesViewModel,
  BreakpointViewModel,
  SubdomainsViewModel
} from '~/view-model';

interface MoreArticlesViewModel {
  breakpoint: BreakpointViewModel,
  articles: ArticlesViewModel,
  categoryId?: number,
  pagedLimit?: number,
  subdomain?: SubdomainsViewModel
}

export default MoreArticlesViewModel;
