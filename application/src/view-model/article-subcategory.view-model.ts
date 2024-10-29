import { ArticleViewModel } from '~/view-model';

type ArticleSubcategoryViewModel = Pick<ArticleViewModel, 'id' | 'title' | 'url'>

export default ArticleSubcategoryViewModel;
