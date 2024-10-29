import CacheTTL from './redis-ttl';

const EXPIRED_TIME = CacheTTL.CATEGORY_TREE;

const getCategoriesTree = async ({ cache, subdomain }) => {
  const redisKeyCategoryTree = `category-${subdomain}-blog/tree`;
  const categoryTree = cache?.get ? await cache.get(redisKeyCategoryTree) : '[]';

  return JSON.parse(categoryTree);
};

const setCategoriesTree = async ({ cache, getDataByApi, subdomain }) => {
  const redisKeyCategoryTree = `category-${subdomain}-blog/tree`;
  let categoriesTree = [];

  if (typeof getDataByApi !== 'function') return categoriesTree;

  const { data } = await getDataByApi({ subdomain });
  categoriesTree = data;

  if (cache?.set && categoriesTree?.length > 0) {
    await cache.set(redisKeyCategoryTree, JSON.stringify(categoriesTree), 'EX', EXPIRED_TIME);
  }

  return categoriesTree;
};

const resolveCategoriesTree = async ({ cache, subdomain, getDataByApi }) => {
  let categoriesTree = [];
  categoriesTree = await getCategoriesTree({ cache, subdomain });
  if (categoriesTree?.length > 0) {
    return categoriesTree;
  }
  return setCategoriesTree({ cache, subdomain, getDataByApi });
};

const categoriesTree = (cache, api) => {
  const getDataByApi = api.categoriesTree;

  return {
    getCategoriesTree: (subdomain) => getCategoriesTree({ cache, subdomain }),
    setCategoriesTree: (subdomain) => setCategoriesTree({ cache, subdomain, getDataByApi }),
    resolveCategoriesTree: (subdomain) => resolveCategoriesTree({ cache, subdomain, getDataByApi }),
  };
};

export default categoriesTree;
