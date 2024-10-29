const getLimitedText = (input: string, isShort?: boolean, limit = 135) => {
  if (input && input?.length === 0) {
    return '';
  }

  const DELIMITER = '...';

  const result = input.slice(0, Math.max(0, limit * (isShort ? 1 : 1.4)));
  const wordIdx = result.lastIndexOf(isShort ? ' ' : '.');

  if (!limit || input.length <= limit || wordIdx === -1) {
    return input;
  }

  return `${result.slice(0, Math.max(0, wordIdx))}${isShort ? DELIMITER : '.'}`;
};

export default getLimitedText;
