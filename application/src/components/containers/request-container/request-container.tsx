import getConfig from 'next/config';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import useApi, { ApiMethods } from '~/hooks/use-api';

// delete when TS => 4.5
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type AxiosWrapped<T> = T extends AxiosResponse<infer U> ? U : T;
export type ReturnedData<T extends keyof ApiMethods> = ReturnType<ApiMethods[T]>;

export interface RequestContainerProps<M extends keyof ApiMethods> {
  children: (res: Awaited<ReturnedData<M>>) => React.ReactNode
  placeholder?: React.ReactNode
  params?: Parameters<ApiMethods[M]>[0]
  method: M
  data?: AxiosWrapped<Awaited<ReturnedData<M>>>
}

function RequestContainer<M extends keyof ApiMethods>({
  children,
  placeholder,
  method,
  data,
  params
}: RequestContainerProps<M>): React.ReactElement {
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: { apiPublic: '' } };
  const { apiPublic } = publicRuntimeConfig;

  const api = useApi(apiPublic);

  const [payload, setPayload] = useState<Awaited<ReturnedData<M>>>(data);

  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!payload && typeof method === 'string' && typeof api[method] === 'function') {
      (async () => {
        try {
          const response: Awaited<ReturnedData<M>> = await api[method](params);

          setPayload(response);
        } catch {
          setError(true);
        }
      })();
    }
  }, []);

  if (isError) {
    return null;
  }

  if (!payload) {
    return <>{placeholder}</>;
  }

  return (
    <>{children(payload)}</>
  );
}

export default RequestContainer;
