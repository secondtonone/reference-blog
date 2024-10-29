import type CategoryViewModel from './category.view-model';
import type AuthorViewModel from './author.view-model';
import type BackgroundPaletteViewModel from './background-palette.view-model';
import type ArticleStatusViewModel from './article-status.view-model';

interface ArticleViewModel extends BackgroundPaletteViewModel {
  id?: number | string | any,
  title: string,
  preview?: string,
  category: CategoryViewModel,
  isHot?: boolean,
  timeToRead?: number,
  previewImage?: string,
  altPreviewImage?: string,
  author: AuthorViewModel,
  url?: string,
  publishedAt: number,
  editedAt?: number,
  share?: number,
  content?: string,
  isDraft?: boolean,
  status?: ArticleStatusViewModel,
}

export default ArticleViewModel;
