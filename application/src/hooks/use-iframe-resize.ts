import { useCallback, useState, SyntheticEvent } from 'react';

const useIframeResize = (defaultHeight: number) => {
  const [height, setHeight] = useState<number>(defaultHeight);
  const [isError, setError] = useState<boolean>(false);

  const onLoad = useCallback((e: SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframeBody = e.currentTarget.contentWindow.document.body;
      // @ts-ignore
      const resizeObserver = new ResizeObserver(entries => {
        let blockSize: number;
        // eslint-disable-next-line no-restricted-syntax
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize: { blockSize: number } = Array.isArray(entry.contentBoxSize)
              ? entry.contentBoxSize[0]
              : entry.contentBoxSize;

            blockSize = contentBoxSize.blockSize;
          }
        }

        const newHeight = blockSize + 20;
        setHeight(newHeight);
      });

      resizeObserver.observe(iframeBody);
    } catch {
      setError(true);
    }
  }, []);

  return {
    height,
    isError,
    onLoad
  };
};

export default useIframeResize;
