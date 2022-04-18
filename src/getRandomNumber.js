const getRandomNumber = (dozens = 1000) => {
  const number = Math.floor(Math.random() * dozens);
  return number;
};
const getRandomNumb = (min = 1, max = 200) => {
  const minimalism = Math.ceil(min);
  const maximalism = Math.floor(max);
  return Math.floor(Math.random() * (maximalism - minimalism)) + minimalism;
};
export { getRandomNumb, getRandomNumber };
