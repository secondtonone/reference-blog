import {
  ArticlesViewModel,
  ArticleViewModel,
  BreakpointViewModel,
  CategoryViewModel,
  EbookViewModel,
  PageViewModel,
  SubdomainsViewModel,
  BotsDetectionViewModel
} from '~/view-model';

interface MainDefaultViewModel extends BotsDetectionViewModel {
  breakpoint: BreakpointViewModel,
  subdomain?: SubdomainsViewModel,
  page: PageViewModel,
  articles: ArticlesViewModel,
  excludeIds?: string,
  pagedLimit?: number,
  articlesCount?: number,
  previewCard?: ArticleViewModel,
  bigCards?: ArticlesViewModel,
  editors?: ArticlesViewModel,
  seo?: ArticlesViewModel,
  content?: ArticlesViewModel,
  tagsSeo?: CategoryViewModel,
  tagsMarketing?: CategoryViewModel,
  tagsContent?: CategoryViewModel,
  marketing?: ArticlesViewModel,
  ebook?: EbookViewModel,
  hideSubscribe?: boolean
}

export default MainDefaultViewModel;
