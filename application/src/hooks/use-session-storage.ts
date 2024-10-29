import { useEffect, useState } from 'react';

const useSessionStorage = (storageKey = 'semblog-storage', initial) => {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    let saved;

    try {
      saved = JSON.parse(sessionStorage.getItem(storageKey));
    } catch (error) {
      return error;
    }

    setValue(saved);

    return saved;
  }, []);

  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
