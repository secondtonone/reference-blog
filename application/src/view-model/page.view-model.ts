import {
  CategoryViewModel, AuthorViewModel, BlocksViewModel, SubdomainsViewModel
} from '~/view-model';
import type BackgroundPaletteViewModel from './background-palette.view-model';
import type ArticleStatus from './article-status.view-model';
import ArticleMetrics from './article-metrics.view-model';

interface PageViewModel extends BackgroundPaletteViewModel {
  id: number,
  previewImage: string,
  title: string,
  author: AuthorViewModel,
  publishedAt: number,
  category: CategoryViewModel,
  timeToRead: number,
  url: string,
  template?: 'article-base',
  socialImage: string,
  preview: string,
  extraImage?: string,
  altPreviewImage: string,
  altSocialImage: string,
  hidePreviewImage?: number,
  editedAt: number | null,
  metaTitle: string,
  metaDescription: string,
  related: number[] | null,
  schemaOrg: string,
  blocks?: BlocksViewModel,
  critical: {
    'article-content': {
      id: number,
      content: string,
      galaxy: string,
      team: string
    }
  },
  alternates?: [],
  translated: {
    language: SubdomainsViewModel,
    url: string,
    title: string
  }[] | null,
  status: ArticleStatus,
  tableOfContent?: boolean
  metrics?: ArticleMetrics | null,
  deindex?: boolean
}

type PageProps = PageViewModel

export default PageProps;
