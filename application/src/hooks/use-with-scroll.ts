import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

interface iWithScroll {
  isOnScroll: boolean,
  isOnEnd: boolean
}

const useWithScroll = (scrollGapMultiplier = 1.5): iWithScroll => {
  const [isOnScroll, setOnScroll] = useState<boolean>(true);
  const [isOnEnd, setOnEnd] = useState<boolean>(false);

  useEffect(() => {
    const THROTTLE_DELAY = 400;
    let prevPosition = window.pageYOffset;
    const preEndingPosition = document.body.scrollHeight - window.innerHeight * scrollGapMultiplier;

    const onScroll = throttle(() => {
      const currentPosition = window.pageYOffset;

      if (prevPosition > currentPosition) {
        setOnScroll(true);
      } else if (isOnScroll) {
        setOnScroll(false);
      }

      if (currentPosition > preEndingPosition) {
        setOnEnd(true);
      } else if (isOnEnd) {
        setOnEnd(false);
      }

      prevPosition = currentPosition;
    }, THROTTLE_DELAY);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    isOnScroll,
    isOnEnd
  };
};

export default useWithScroll;
