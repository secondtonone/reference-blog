import axios from 'axios';

import {
  EbookExternalViewModel
} from '~/view-model';

const useExternalApi = (
  prefix = 'https://www.example.com'
) => {
  const api = axios.create({
    baseURL: `${prefix}/`
  });

  return {
    ebook: async (slug: string) => {
      const { data: { data } } = await api.get(`ebooks/api/pdf/${slug}/`);
      return data as EbookExternalViewModel;
    }
  };
};

export default useExternalApi;
