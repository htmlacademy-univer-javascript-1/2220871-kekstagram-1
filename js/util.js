//полаучаем случайное число
const getRandomPositiveInteger = (min, max) => min >= 0 && max > min
  ? Math.round(min - 0.5 + Math.random() * (max - min + 1)) : -1;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const checkStringLength = (string, maxLength) => string.length <= maxLength;

export {getRandomArrayElement, getRandomPositiveInteger, checkStringLength};
//экспортируем


