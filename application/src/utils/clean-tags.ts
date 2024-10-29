const cleanTags = (str: string) => {
  const filteredTags = ['&nbsp;'];

  if (filteredTags.some((tag) => str.includes(tag))) {
    return str.replace(/&nbsp;/gi, ' ').trim();
  }

  return str;
};

export default cleanTags;
