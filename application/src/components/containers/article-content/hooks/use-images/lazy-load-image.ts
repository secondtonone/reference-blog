const lazyLoadImage = (image: HTMLImageElement) => {
  image.classList.add('lazyload');

  const { src } = image;
  image.dataset.src = src;
  // image.src = '';

  if (image.srcset) {
    const { srcset } = image;
    image.dataset.srcset = srcset;
    // image.srcset = '';
  }
};

export default lazyLoadImage;
