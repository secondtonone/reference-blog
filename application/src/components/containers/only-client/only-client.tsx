import { useEffect, useState } from 'react';

const OnlyClient = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  return (
    loaded ? (
      children
    ) : <>...</>
  );
};

export default OnlyClient;
