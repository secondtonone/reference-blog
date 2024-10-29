const MIN_WIDTH = 400;

const zoomImage = (image: HTMLImageElement, forceZoom = false) => {
  if (image?.width > MIN_WIDTH || forceZoom) {
    image.classList.add('zooming');
  }
};

export default zoomImage;
