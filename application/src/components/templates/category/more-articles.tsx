import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import { NextPage } from 'next';
import ArticlesList from '~/components/containers/articles-list';

import { useApi, usePagination } from '~/hooks';

import type MoreArticlesViewModel from './more-articles.view-model';

const MoreArticles: NextPage<MoreArticlesViewModel> = ({
  breakpoint,
  articles = [],
  categoryId,
  pagedLimit,
  subdomain
}) => {
  const [pagedArticles, setPagedArticles] = useState(
    articles
  );
  const {
    pageActive,
    onPageClick,
    perPage,
    maxPage,
    nextPage,
    router
  } = usePagination(pagedLimit, 6);

  const isPaginationVisible = maxPage > 1;
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: { apiPublic: '' } };
  const { apiPublic } = publicRuntimeConfig;

  const api = useApi(apiPublic);

  const getArticles = () => {
    (async () => {
      const { data } = await api.pages(
        {
          limit: 6,
          offset: 4,
          page: pageActive,
          categoryId,
          subdomain
        }
      );

      setPagedArticles(data?.length > 0 ? data : []);
    })();
  };

  useEffect(getArticles, [pageActive, router]);

  return (
    <ArticlesList
      cardsShow={3}
      largeCount={0}
      articles={pagedArticles}
      breakpoint={breakpoint}
      data-test="articles-list-bottom-page"
      buttonText={isPaginationVisible ? 'More articles' : null}
      pagination={isPaginationVisible}
      renderEmpty={() => null}
      nextPage={nextPage}
      pageActive={pageActive}
      perPage={perPage}
      onLoadArticles={(page) => onPageClick(page || nextPage)}
      disabledLoad={nextPage > maxPage}
      itemsCount={pagedLimit}
    />
  );
};

export default MoreArticles;
