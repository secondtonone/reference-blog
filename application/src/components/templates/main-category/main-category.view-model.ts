import { SubcategoriesViewModel } from '~/view-model';
import type CategoryPageViewModel from '../category/category-page.view-model';

interface MainCategoryViewModel extends CategoryPageViewModel {
  groups?: SubcategoriesViewModel
}

export default MainCategoryViewModel;
