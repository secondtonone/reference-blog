import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import dayjs from 'dayjs';

const useSessionCookie = (cookieKey: string, initial: any, options = {}) => {
  const [cookies, setCookie] = useCookies([cookieKey]);
  const [value, setValue] = useState<typeof initial>();

  useEffect(() => {
    const savedCookie = cookies[cookieKey];
    let localValue;

    try {
      localValue = JSON.parse(savedCookie);
    } catch (error) {
      return error;
    }

    if (localValue !== 'undefined') {
      setValue(localValue);
      return localValue;
    }

    return savedCookie;
  }, []);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      const expires = dayjs(new Date()).add(1, 'year').toDate();

      setCookie(cookieKey, value, { path: '/', expires, ...options });
    }
  }, [value]);

  return [value, setValue];
};

export default useSessionCookie;
