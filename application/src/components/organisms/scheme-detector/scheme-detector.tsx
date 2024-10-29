const getColorFromScheme = (
  themeDarkKey,
  themeLightKey,
) => {
  const themeKey = 'blog-theme-dark';
  const schemeDark = window.matchMedia('(prefers-color-scheme: dark)');
  const localScheme = sessionStorage.getItem(themeKey);
  let schemeVariant = '';

  const hasSavedScheme = typeof localScheme === 'string';

  if (hasSavedScheme) {
    try {
      const schemeValue = JSON.parse(localScheme);

      if (schemeValue) {
        schemeVariant = themeKey;
      }
    } catch (error) {
      return error;
    }
  } else {
    schemeVariant = schemeDark.matches ? themeDarkKey : themeLightKey;
    sessionStorage.setItem(themeKey, JSON.stringify(schemeVariant === themeKey));
  }

  if (schemeVariant) {
    document.body.dataset.scheme = schemeVariant;
  }

  return schemeVariant;
};

const SchemeDetector = () => {
  const themeScript = `(${getColorFromScheme})(
        'blogeme-dark',
        'blogeme-light'
      )`;

  return (
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
};

export default SchemeDetector;
