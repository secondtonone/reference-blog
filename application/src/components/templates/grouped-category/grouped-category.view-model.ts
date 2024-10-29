import { ArticlesViewModel } from '~/view-model';
import type CategoryPageViewModel from '../category/category-page.view-model';

type Group = {
  name: string,
  articles: ArticlesViewModel
}

type Tag = {
  title: string,
  link: string
};

interface GroupedCategoryViewModel extends Omit<CategoryPageViewModel, 'tags'> {
  groups: Group[]
  tags?: Tag[],
  largeCount: 4 | 0
}

export default GroupedCategoryViewModel;
