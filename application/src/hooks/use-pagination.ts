import { useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.throttle';

type RouterRequest = {
  pathname: string,
  query?: { [k: string]: string | string[] }
}

const usePagination = (itemsCount: number, perPage: number, resetPage?: number) => {
  const router = useRouter();
  const queryPage = +router?.query.page;
  const pageNumber = queryPage > resetPage ? 30 : (queryPage > 0 ? queryPage : 1);
  const [pageActive, setPageActive] = useState(pageNumber);

  const maxPage = Math.ceil(itemsCount / perPage);
  const nextPage = pageActive + 1;
  const disabledLoad = nextPage > maxPage;

  const goToPage = (page: number) => {
    if (!Number.isNaN(page)) {
      const { category = '', subcategory = '', ...fields } = router?.query || { category: '' };
      const query = { ...fields, page: `${page}` };
      const pathname = `${category ? `/blog/category/${category}/${subcategory ? `${subcategory}/` : ''}` : ''}`;

      const request: RouterRequest = {
        pathname,
        query
      };

      router?.push(request, undefined, { scroll: false, shallow: true });

      setPageActive(page);
    }
  };

  const onPageClick = debounce(goToPage, 1000);

  return {
    pageActive: pageActive || 1,
    onPageClick,
    itemsCount,
    goToPage,
    perPage,
    maxPage,
    nextPage,
    disabledLoad,
    router
  };
};

export default usePagination;
