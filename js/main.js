const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
checkStringLength();
getRandomIntInclusive();
