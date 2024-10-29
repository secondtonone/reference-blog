import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

interface Props {
  headerRef: any,
  isUser: boolean,
}

const useUserInteraction = ({
  headerRef,
  isUser
}: Props) => {
  const HEADER_DEFAULT_HEIGHT = 130;
  const [pageStep, setPageStep] = useState(HEADER_DEFAULT_HEIGHT);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [scrolled, setScrolled] = useState<number>(0);

  if (!isUser) {
    return {
      scrolled: 0,
      fixedHeader: false
    };
  }

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight || HEADER_DEFAULT_HEIGHT;
    const { scrollHeight, clientHeight } = document.documentElement;

    setPageStep(Math.round(headerHeight));

    const onScroll = throttle(() => {
      const scrollLimit = window.scrollY > (Math.round(pageStep * 2));
      const currentPosition = document.documentElement.scrollTop;
      const totalHeight = scrollHeight - clientHeight;
      const progress = currentPosition / totalHeight;

      setScrolled(progress);

      if (scrollLimit !== fixedHeader) {
        setFixedHeader(scrollLimit);
      }
    }, 250);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [headerRef.current, fixedHeader]);

  return {
    scrolled,
    fixedHeader
  };
};

export default useUserInteraction;
