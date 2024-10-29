import { CategoriesTree } from '~/components/organisms';
import Popup from '~/enums/popup';
import { useCategories } from '~/hooks';
import HeaderPopup from '~/components/containers/header-popup';
import { CategoryTreeViewModel } from '~/view-model';

interface Props {
  fixed?: boolean,
  categoriesList?: CategoryTreeViewModel[]
}

const CategoryMenuPopup: React.FC<Props> = ({ categoriesList, fixed = false }) => {
  const [categories] = useCategories(categoriesList);

  return (
    <HeaderPopup name={Popup.ALL_TAGS} fixed={fixed}>
      <CategoriesTree tree={categories} />
    </HeaderPopup>
  );
};

export default CategoryMenuPopup;
