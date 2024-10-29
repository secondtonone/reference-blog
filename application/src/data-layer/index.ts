import axios from 'axios';
import categoriesTree from './categories-tree';

const useApi = (prefix = 'https://blog-rc.rc-k2.example.net') => {
  const config = {
    baseURL: `${prefix}/blog/api/v3/`,
  };

  const api = axios.create(config);

  return {
    categoriesTree: async (params = {}) => {
      const { data } = await api.get('categories/tree', { params });
      return data;
    },
  };
};

const dataLayerHandlers = [categoriesTree];

const dataLayerMaker = (cache, apiPath) => dataLayerHandlers
  .reduce((layer, handlers) => ({ ...layer, ...handlers(cache, useApi(apiPath)) }), {});

export default dataLayerMaker;
