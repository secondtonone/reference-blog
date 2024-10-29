import { useEffect, useState } from 'react';

export interface DynamicComponentProps {
  children: React.ReactElement
  placeholder?: React.ReactElement
  onScroll?: () => void
  instant?: boolean
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({
  instant = false,
  children,
  placeholder,
  onScroll
}) => {
  const [isLoaded, setLoading] = useState(instant);

  useEffect(() => {
    const handler = () => {
      if (!isLoaded) setLoading(true);
      if (typeof onScroll === 'function') onScroll();
      window.removeEventListener('scroll', handler);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <>
      {isLoaded ? children : placeholder}
    </>
  );
};

export default DynamicComponent;
