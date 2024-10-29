import { useEffect } from 'react';

const useMarketo = ({
  baseUrl, munchkinId, formId, callback
}) => {
  useEffect(() => {
    // @ts-ignore
    if (window.MktoForms2) {
      // @ts-ignore
      window.MktoForms2.loadForm(baseUrl, munchkinId, formId, callback);
    }
  }, [baseUrl, munchkinId, formId, callback]);
};

export default useMarketo;
