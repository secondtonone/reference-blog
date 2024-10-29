import { useState, useCallback } from 'react';
import { useClickHandling } from '~/hooks';
import { ImageZoomLayoutProps } from '~/components/containers/article-content/image-zoom-layout';

const useZoomedImage = () => {
  const [zoomedImageData, setZoomedImageData] = useState<ImageZoomLayoutProps>();

  useClickHandling('article', (event) => {
    const target = event.target as HTMLImageElement;

    if (target.tagName === 'IMG' && target.classList.contains('zooming')) {
      setZoomedImageData({
        src: target.dataset.src,
        original: target.dataset.original,
        width: +target.getAttribute('width') || null,
        naturalWidth: target.naturalWidth,
        naturalHeight: target.naturalHeight,
      });
    }
  });

  const clearData = useCallback(() => {
    setZoomedImageData(null);
  }, [setZoomedImageData]);

  return [zoomedImageData, clearData] as const;
};

export default useZoomedImage;
