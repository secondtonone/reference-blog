import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { useRouter } from 'next/router';

interface IScrollDepth {
  scrollDepthValues?: Array<number>
  handler: (scrollDepth: number) => void
}

const useScrollDepth = ({ scrollDepthValues = [10, 50, 90], handler }: IScrollDepth) => {
  const [lastDepthValue, setLastDepthValue] = useState<number>(0);
  const { asPath } = useRouter();

  useEffect(() => {
    setLastDepthValue(0);
  }, [asPath]);

  useEffect(() => {
    const THROTTLE_DELAY = 100;

    const onScroll = throttle(() => {
      const currentPos = window.scrollY;
      const maxHeight = document.body.scrollHeight;
      const percentage = Math.round((currentPos * 100) / maxHeight);

      const currentDepthValue = scrollDepthValues
        .reverse()
        .find(value => value < percentage);

      if (lastDepthValue < currentDepthValue) {
        handler(currentDepthValue);
        setLastDepthValue(currentDepthValue);
      }
    }, THROTTLE_DELAY);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lastDepthValue]);
};

export default useScrollDepth;
