import getConfig from 'next/config';
import { useEffect, useState } from 'react';
import { Awaited, AxiosWrapped, ReturnedData } from '~/components/containers/request-container';

import useApi, { ApiMethods } from '~/hooks/use-api';

export type MethodSettings<T extends keyof ApiMethods> = [...{
  params?: Parameters<ApiMethods[T]>[0]
  method: T
}[]];

export interface RequestChainContainerProps<M extends keyof ApiMethods> {
  children: (res: [...Awaited<ReturnedData<M>>[]]) => React.ReactNode
  placeholder?: React.ReactNode
  data?: [...AxiosWrapped<Awaited<ReturnedData<M>>[]>]
  chain: MethodSettings<M>
}

function RequestChainContainer<M extends keyof ApiMethods>({
  children,
  placeholder,
  data,
  chain,
}: RequestChainContainerProps<M>): React.ReactElement {
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: { apiPublic: '' } };
  const { apiPublic } = publicRuntimeConfig;

  const api = useApi(apiPublic);

  const [payload, setPayload] = useState<[...Awaited<ReturnedData<M>>[]]>(data);

  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(payload) && Array.isArray(chain)) {
      (async () => {
        try {
          const response = await Promise
            .all<Awaited<ReturnedData<M>>>(chain
              .map(({
                method,
                params
              }, index) => payload[index] || api[method](params)));

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

  if (payload.filter(item => item).length === 0) {
    return <>{placeholder}</>;
  }

  return (
    <>{children(payload)}</>
  );
}

export default RequestChainContainer;
