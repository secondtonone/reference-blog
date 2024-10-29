const getRandomElement = <T>(array:T[]) => {
  if (!Array.isArray(array)) return null;
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

export default getRandomElement;
