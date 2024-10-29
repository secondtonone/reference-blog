import useLayoutEffect from 'use-isomorphic-layout-effect';

const useLockScroll = (isLocked = true) => {
  useLayoutEffect(() => {
    if (isLocked) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isLocked]);
};

export default useLockScroll;
