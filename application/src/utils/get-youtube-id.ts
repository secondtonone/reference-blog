const getYouTubeId = (url: string) => {
  const [a, , b] = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (b !== undefined) {
    return b.split(/[^\w-]/i)[0];
  }
  return a;
};

export default getYouTubeId;
