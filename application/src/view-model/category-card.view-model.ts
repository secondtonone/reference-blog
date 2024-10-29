import { SubcategoryViewModel } from '~/view-model';

type CategoryCardViewModel = Partial<Omit<SubcategoryViewModel, 'categories' | 'lang'>>;

export default CategoryCardViewModel;
