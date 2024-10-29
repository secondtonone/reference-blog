import { useEffect, useState, useRef } from 'react';

export interface OnInteractionProps {
  children: React.ReactElement
  placeholder?: React.ReactElement
  instant?: boolean
  event?: string
}

const OnInteraction: React.FC<OnInteractionProps> = ({
  instant = false,
  children,
  event = 'mouseenter',
  placeholder
}) => {
  const [isLoaded, setLoading] = useState(instant);

  const wrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = () => {
      if (!isLoaded) setLoading(true);
    };

    if (wrapper.current) wrapper.current.addEventListener(event, handler);

    return () => {
      if (wrapper.current) wrapper.current.removeEventListener(event, handler);
    };
  }, []);

  return (
    <>
      {isLoaded ? children : <div data-test="wrapper-for-interaction" ref={wrapper}>{placeholder}</div>}
    </>
  );
};

export default OnInteraction;
