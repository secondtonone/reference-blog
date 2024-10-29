import {
  useState, useEffect, FC, forwardRef, useCallback
} from 'react';
import { useOnScreen } from '~/hooks';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

interface IntersectionContainerProps extends BoxAdaptiveProps {
  once?: boolean;
  onIntersection?: (isIntersecting: boolean) => void;
  options?: IntersectionObserverInit
  onObserve?: IntersectionObserverCallback
}

const IntersectionContainer: FC<IntersectionContainerProps> = forwardRef(({
  children,
  once,
  onIntersection,
  options,
  onObserve,
  ...props
}, ref) => {
  const [isTriggered, setTriggering] = useState(false);
  const [reference, setRef] = useState<HTMLDivElement>(null);

  const [isIntersecting] = useOnScreen<typeof reference>(reference, options, onObserve);

  useEffect(() => {
    const onceTriggeredOption = !once || !isTriggered;

    if (onceTriggeredOption && isIntersecting && typeof onIntersection === 'function') {
      onIntersection(isIntersecting);
      setTriggering(true);
    }
  }, [isIntersecting, isTriggered, once, onIntersection]);

  const getRef = useCallback((element: HTMLDivElement) => {
    if (typeof ref === 'function') ref(element);
    setRef(element);
  }, [ref]);

  return (
    <BoxAdaptive data-test="intersection-container" ref={getRef} {...props}>{children}</BoxAdaptive>
  );
});

export default IntersectionContainer;
