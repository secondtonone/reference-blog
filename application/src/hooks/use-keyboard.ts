import { useEffect } from 'react';

const useKeyboard = (key: string, callback:() => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener('keyup', handler);
    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, []);
};

export default useKeyboard;
