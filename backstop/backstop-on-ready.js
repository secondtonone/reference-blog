module.exports = async (page) => {
  const timeout = 15;

  const values = await page.evaluate(async () => {
    const images = [];

    /* eslint-disable no-restricted-syntax */
    for (const elem of document.querySelectorAll('img[data-src]')) {
      if (!elem.src) {
        elem.src = elem.dataset.src;
        elem.classList.replace('lazyload', 'lazyloaded');

        images.push(
          () => new Promise((resolve, reject) => {
            elem.addEventListener('load', () => resolve());
            elem.addEventListener('load', () => reject());
          })
        );
      }
    }

    return Promise.allSettled(images.map((promise) => promise()));
  });

  await page.waitFor(timeout * values.length);
};
