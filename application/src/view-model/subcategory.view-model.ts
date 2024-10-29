import { CategoryViewModel, ArticlesSubcategoryViewModel } from '~/view-model';
import { IllustGroupTokens, WidgetGroupTokens } from '~/styles/palette';

interface SubcategoryViewModel extends CategoryViewModel {
  previewImage?: string,
  categories?: number[],
  background?: keyof WidgetGroupTokens | keyof IllustGroupTokens | 'orangeIllust',
  pages?: ArticlesSubcategoryViewModel,
}

export default SubcategoryViewModel;
