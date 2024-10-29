const makeGifMarker = () => {
  const gifMarker = document.createElement('div');
  gifMarker.className = 'gif-marker';
  gifMarker.innerHTML = '<span>GIF</span>';

  return gifMarker;
};

const appendMarker = (
  image: HTMLImageElement,
  marker: HTMLDivElement
) => image.parentElement.append(marker);

const appendGifMarker = (
  image: HTMLImageElement,
  gifMarker: HTMLDivElement | null
) => {
  if (image?.dataset?.src?.endsWith('.gif') || image?.dataset?.original?.endsWith('.mp4')) {
    if (!gifMarker) gifMarker = makeGifMarker();
    appendMarker(image, gifMarker);
  }

  return gifMarker;
};

export default appendGifMarker;
