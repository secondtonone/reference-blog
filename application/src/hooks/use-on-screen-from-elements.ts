import { useEffect, useState } from 'react';

const useOnScreenFromElements = (
  selector: string,
  options?: IntersectionObserverInit,
  onObserve?: (element: Element) => void
) => {
  const [currentElement, setCurrentHeader] = useState<Element>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentHeader(entry.target);
            if (typeof onObserve === 'function') onObserve(entry.target);
          }
        });
      },
      options
    );

    const elements = document.querySelectorAll(selector);

    if (elements) elements.forEach((element) => observer.observe(element));

    return () => {
      if (observer) observer.disconnect();
    };
  }, [selector, onObserve]);

  return currentElement;
};

export default useOnScreenFromElements;
