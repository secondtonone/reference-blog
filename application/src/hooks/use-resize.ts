import { useEffect } from 'react';
import debounce from 'lodash.debounce';

const useResize = (callback) => {
  useEffect(() => {
    const onResize = debounce(() => {
      if (callback && callback instanceof Function) {
        callback();
      }
    }, 500);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
};

export default useResize;
