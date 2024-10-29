import { useState, useCallback } from 'react';

const EFFECT_MS = 400;

const useRender = (effect: () => void) => {
  const [isRendered, setRender] = useState<boolean>(true);

  const turnOut = useCallback(() => {
    setRender(false);
    setTimeout(() => {
      if (effect) effect();
    }, EFFECT_MS);
  }, [effect]);

  return {
    isRendered,
    setRender,
    turnOut
  };
};

export default useRender;
