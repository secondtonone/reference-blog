import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import { useApi } from '~/hooks';
import { CategoriesTreeViewModel } from '~/view-model';

type Subdomain = 'en';

const useCategories = (categoriesTree: CategoriesTreeViewModel = null, subdomain: Subdomain = 'en') => {
  const [categories, setCategories] = useState<CategoriesTreeViewModel>(categoriesTree);

  useEffect(() => {
    const { publicRuntimeConfig } = getConfig();
    const { apiPublic } = publicRuntimeConfig;

    const api = useApi(apiPublic);

    (async () => {
      const { data } = await api.categoriesTree({ subdomain });

      if (data) {
        setCategories(data);
      }
    })();
  }, []);

  return [categories];
};

export default useCategories;
