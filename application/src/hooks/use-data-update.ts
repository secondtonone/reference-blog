import { useEffect, useState } from 'react';

export interface MetaProps<T> {
  scheme: Array<(deps:MetaProps<T>['deps']) => T>
  deps: Array<T>
}

const mapper = <T>({
  scheme,
  deps
}: MetaProps<T>) => scheme.map((prop) => prop(deps));

const useDataUpdate = <T>({
  scheme,
  deps
}: MetaProps<T>) => {
  const [data, setData] = useState<T[]>(mapper({
    scheme,
    deps
  }));

  useEffect(() => {
    const newData = mapper({
      scheme,
      deps
    });

    setData(newData);
  }, deps);

  return data;
};

export default useDataUpdate;
