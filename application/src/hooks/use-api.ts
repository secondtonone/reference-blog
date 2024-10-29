import axios, {
  CancelTokenSource,
  CancelToken,
  AxiosResponse
} from 'axios';

import {
  ArticlesViewModel,
  AuthorViewModel,
  EbookViewModel,
  PageViewModel,
  CategoriesTreeViewModel,
  CategoryViewModel,
  MainPageViewModel,
  OembedViewModel,
  SubdomainsViewModel,
  SubcategoriesViewModel,
  SubcategoryViewModel,
} from '~/view-model';

import createApi from '~/api';

export type PageParams = {
  subdomain: SubdomainsViewModel,
} & Partial<{
  limit: number,
  page: number,
  offset: number,
  categoryId: number,
  excludeIds: string,
  categorySlug: string,
  parentSlug: string,
}>

export type PagesResponse<T> = {
  total?: number
} & AxiosResponse<T>

interface PageFields extends OembedViewModel {
  data: PageViewModel,
  parseContent: boolean
}

const useApi = (
  prefix = 'https://semblog-rc.rc-k2.example.net',
  authToken = '',
  requestsTimingLogging = false
) => {
  const api = createApi(prefix, authToken, requestsTimingLogging);

  return {
    api,
    pages: async (params: PageParams, cancelToken = null) => {
      const res: PagesResponse<ArticlesViewModel> = await api.get('pages', { params, cancelToken });
      return res;
    },
    pageMainSettings: async (language = 'en') => {
      const { data } = await api.get<MainPageViewModel>('pages/main', { params: { language, viewBlocks: true } });
      return data;
    },
    pagesList: async (params = '') => {
      const res = await api.get<ArticlesViewModel>(`pages/list${params}`);
      return res;
    },
    categories: async () => {
      const res = await api.get('categories');
      return res;
    },
    categoriesTree: async (params = {}) => {
      const res = await api.get<CategoriesTreeViewModel>('categories/tree', { params });
      return res;
    },
    category: async ({
      slug,
      params
    }:{
      slug: string | string[],
      params?:{ subdomain?: SubdomainsViewModel}
    }) => {
      const res = await api.get<CategoryViewModel>(`categories/${slug}`, { params });
      return res;
    },
    author: async (authorId: number | string) => {
      const { data } = await api.get<AuthorViewModel>(`authors/${authorId}`);
      return data;
    },
    authorArticles: async (id, params = {}) => {
      const res = await api.get(`authors/${id}/articles`, { params });
      return res;
    },
    page: async (slug: string | string[], params = {}) => {
      const res: PageFields = await api.get(`pages/blog/${slug}`, { params });
      return res;
    },
    article: async (id: number, params = {}) => {
      const { data } = await api.get(`articles/${id}`, { params: { amp: 0, ...params } });
      return data;
    },
    ebook: async (id: number) => {
      const { data } = await api.get<EbookViewModel>(`ebooks/${id}`);
      return data;
    },
    search: async (params = {}, cancelToken = null) => {
      const { data } = await api.get<{ items: ArticlesViewModel, total: number }>('search/articles', { params, cancelToken });
      return data;
    },
    auth: async () => {
      const res = await api.get('auth/login');
      return res;
    },
    subcategory: async ({ slug, params }: {
      slug: string | string[],
      params: { subdomain: SubdomainsViewModel, parentSlug: string }
    }) => {
      const res = await api.get<SubcategoryViewModel>(`subcategories/${slug}`, { params });
      return res;
    },
    subcategories: async (params: {
      subdomain: SubdomainsViewModel,
      categorySlug: string | string[],
      limit?: number,
      offset?: number,
    }) => {
      const res = await api.get<SubcategoriesViewModel>('subcategories', { params });
      return res;
    },
    subcategoryList: async ({ ids } : {
      ids: number[]
    }) => {
      const res = await api.get<SubcategoriesViewModel>('subcategories/list', {
        params: {
          ids: `[${ids}]`
        }
      });
      return res;
    }
  };
};

export type ApiMethods = ReturnType<typeof useApi>

const { CancelToken: canceller } = axios;
let request: CancelTokenSource;

const useCancelToken = () => {
  if (request) {
    request.cancel();
  }

  request = canceller.source();

  return request.token as CancelToken;
};

export default useApi;

export {
  useCancelToken
};
