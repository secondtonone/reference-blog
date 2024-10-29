import {
  ArticlesViewModel,
  BreakpointViewModel,
  CanonicalSubdomainViewModel,
  CategoryTreeViewModel,
  EbookViewModel,
  PageViewModel,
  BotsDetectionViewModel,
  SubdomainsViewModel
} from '~/view-model';

interface ArticleBaseViewModel extends BotsDetectionViewModel {
  breakpoint: BreakpointViewModel,
  page: PageViewModel,
  articles: ArticlesViewModel,
  ebook: EbookViewModel,
  renderSidebar?: () => React.ReactNode,
  categoriesTree?: CategoryTreeViewModel,
  subdomain?: SubdomainsViewModel,
  canonicalSubdomain?: CanonicalSubdomainViewModel,
  isAuth?: boolean,
  hideSubscribe?: boolean,
  parseContent?: boolean
}

export default ArticleBaseViewModel;
