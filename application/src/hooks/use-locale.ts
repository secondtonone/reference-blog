import { useState, useEffect } from 'react';
import isServer from '~/constants/is-server';
import { getLocale } from '~/utils';

const useLocale = () => {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    const url = isServer ? '' : window.location.hostname;
    setLocale(getLocale(url));
  }, []);

  return [
    locale
  ];
};

export default useLocale;
