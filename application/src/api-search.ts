import axios, {
  AxiosRequestConfig,
} from 'axios';
import { SubdomainsViewModel } from '~/view-model';

interface Props {
  query: string,
  page?: number,
  limit?: number,
  language?: SubdomainsViewModel
}

const createApi = (prefix: string, token: string) => {
  let config = {
    baseURL: `${prefix}/api/v1/`,
    timeout: 5000
  } as AxiosRequestConfig;

  if (token) {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  const api = axios.create(config);

  return {
    search: ({
      query,
      page = 1,
      limit = 10,
      language = 'en'
    }: Props) => api.get('search', {
      params: {
        app: 'blog',
        language,
        limit,
        query,
        page,
      }
    })
  };
};

export default createApi;
