import { useState, useEffect } from 'react';

const useIsIn = (condition: () => boolean) => {
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect(() => {
    setIsIn(condition());
  }, []);

  return [
    isIn
  ];
};

export default useIsIn;
