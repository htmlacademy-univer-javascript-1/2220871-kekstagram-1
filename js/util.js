const ALERT_SHOW_TIME = 4000;
const TIME_OUT_DELAY = 500;

const getRandomIntFromRange = (minimal, maximum) => {
  if (maximum < minimal) {
    throw new Error('Значение min должно быть больше значения max!');
  }

  if (minimal < 0 || maximum < 0) {
    throw new Error('Диапазон должен быть положительным!');
  }
  minimal = Math.ceil(minimal);
  maximum = Math.floor(maximum);
  return Math.floor(Math.random() * (maximum - minimal + 1)) + minimal;
};

const checkStringLength = (curString, maxLength) => curString.length <= maxLength;

const isEscapeKey = (event) => event.key === 'Escape';

checkStringLength('Привет', 45);

const getRandomArrayElement = (elements) => elements[getRandomIntFromRange(0, elements.length - 1)];

const getRandomUniqueElements = (arr) => {
  const newArray = arr.slice();
  const elements = [];
  const newArrayLength = arr.length;
  for (let i = 0; i < newArrayLength; i++) {
    const randomId = getRandomIntFromRange(0, newArray.length- 1);
    elements.push(newArray[randomId]);
    newArray.splice(randomId, 1);
  }
  return elements;
};

const debounce = (callback, timeoutDelay = TIME_OUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomIntFromRange, getRandomArrayElement, getRandomUniqueElements, isEscapeKey, showAlert, debounce};
