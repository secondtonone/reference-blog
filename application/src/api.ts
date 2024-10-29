import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';

import isServer from '~/constants/is-server';

const createApi = (
  prefix: string,
  authToken?: string,
  requestsTimingLogging?: boolean
) => {
  let config = {
    baseURL: `${prefix}/blog/api/v3/`,
    timeout: 5000
  } as AxiosRequestConfig & { meta?: any };

  if (authToken) {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    };
  }

  const api = axios.create(config);

  const logResponse = (res) => {
    if (requestsTimingLogging && isServer) {
      process?.stdout?.write(`
    ---------------
    [${res?.status}] ${res?.config?.url}
    responseTime ${new Date().getTime() - res?.config?.meta?.requestStartedAt} ms
    req params ${JSON.stringify(res?.config?.params) ?? ''}
  `);
    }
  };

  const onSuccess = (response: AxiosResponse) => {
    logResponse(response);

    if (response.status === 200) {
      return response.data;
    }

    return response;
  };

  const onError = (err: AxiosError) => {
    logResponse(err.response);

    return err;
  };

  api.interceptors.request.use((req: AxiosRequestConfig) => {
    if (requestsTimingLogging) {
      // @ts-ignore
      req.meta = req.meta || {};
      // @ts-ignore
      req.meta.requestStartedAt = new Date().getTime();
    }

    return req;
  });

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createApi;
