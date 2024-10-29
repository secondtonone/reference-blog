import { usePagination } from '~/hooks';
import Pagination from '~/components/organisms/pagination';

export default {
  title: 'Organisms/pagination',
};

export const Default = () => {
  const { pageActive, onPageClick, itemsCount, perPage } = usePagination(1200, 6);

  return (
    <div style={{ maxWidth: 200 }}>
      <Pagination
        pageActive={pageActive}
        itemsCount={itemsCount}
        perPage={perPage}
        onPageClick={onPageClick}
      />
    </div>
  );
};

Default.storyName = 'default';
