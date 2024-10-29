import { useEffect } from 'react';
// import lazyLoadImage from './lazy-load-image';
// import dimensionImage from './dimension-image';
import zoomImage from './zoom-image';
import resizeImage from './resize-image';
import appendGifMarker from './append-gif-marker';

const useImages = (selector = 'article img') => {
  useEffect(() => {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(selector);

    if (images?.length > 0) {
      [...images].forEach(image => {
        const forceZoom = Boolean(image?.dataset?.original);
        const gifLabelExists = image?.parentElement?.querySelector('.gif-marker');
        const gifVideoContent = ['.mp4', '.gif'].some(ext => image?.dataset?.original?.endsWith(ext));

        zoomImage(image, forceZoom);
        resizeImage(image);

        if (!gifLabelExists && gifVideoContent) {
          appendGifMarker(image, null);
        }
      });
    }
  }, []);
};

export default useImages;
