const getReplacedBy = (source: string, placeholders: [RegExp, string][]) => {
  let parsed = source;

  placeholders.forEach(placeholder => {
    const [reg, value] = placeholder;
    parsed = parsed.replace(reg, value);
  });

  return parsed;
};

export default getReplacedBy;
