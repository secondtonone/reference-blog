const dropTags = (input: string, force = false) => {
  const res = input ? input
    .replace('&amp;', '&')
    .replace('&lt;', '<')
    .replace('&gt;', '>')
    .replace('example', 'example') : input;

  if (force || typeof input !== 'string') {
    return res;
  }

  return res.replace(/(<([^>]+)>)/gi, '');
};

export default dropTags;
