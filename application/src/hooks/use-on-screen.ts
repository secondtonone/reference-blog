import { useEffect, useState } from 'react';

const useOnScreen = <T extends HTMLElement>(
  element: T,
  options?: IntersectionObserverInit,
  onObserve?: IntersectionObserverCallback
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, _observer) => {
        const [entry] = entries;
        setIntersecting(entry.isIntersecting);
        if (typeof onObserve === 'function') onObserve(entries, _observer);
      },
      options
    );

    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, options]);

  return [isIntersecting];
};

export default useOnScreen;
