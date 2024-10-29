import { useEffect } from 'react';

const useClickHandling = (selector: string, cb: (event: MouseEvent) => void) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => cb(event);

    const element = document.querySelector(selector);

    if (element) {
      element.addEventListener('click', handler);
    }

    return () => {
      if (typeof element?.removeEventListener === 'function') {
        element.removeEventListener('click', handler);
      }
    };
  }, [selector, cb]);
};

export default useClickHandling;
