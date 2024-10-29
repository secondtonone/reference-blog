import { useCallback, useState } from 'react';
import IntersectionContainer from '~/components/containers/intersection-container';

export interface OnIntersectionProps {
  children: React.ReactElement
  placeholder?: React.ReactElement
  instant?: boolean
  margin?: number
  'data-test'?: string
}

const OnIntersection: React.FC<OnIntersectionProps> = ({
  instant = false,
  children,
  margin = 1000,
  placeholder,
  'data-test': dataTest = 'dynamic-component'
}) => {
  const [isLoaded, setLoading] = useState(instant);

  const onIntersection = useCallback(() => {
    if (!isLoaded) setLoading(true);
  }, [isLoaded, setLoading]);

  return (
    <>
      {
      isLoaded ? children : (
        <IntersectionContainer
          once
          onIntersection={onIntersection}
          data-test={`wrapper-for-${dataTest}`}
          options={{
            rootMargin: `${margin}px 0px`
          }}
        >
          {placeholder}
        </IntersectionContainer>
      )
      }
    </>
  );
};

export default OnIntersection;
