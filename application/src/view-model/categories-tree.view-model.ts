import type CategoryViewModel from './category.view-model';

export interface CategoryTreeViewModel extends CategoryViewModel {
  children: CategoryTreeViewModel[];
}

type CategoriesTreeViewModel = CategoryTreeViewModel[];
export default CategoriesTreeViewModel;
