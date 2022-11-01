firstPartDescript = [];
secondPartDescript = [];

message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

];
numberOfPhoto = 25;

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= maxLength;
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};





//for (let i; i<=25; i++){}

let myObject = {
id : getRandomPositiveInteger(1,25),
url : 'photos/' + getRandomPositiveInteger(1,25) + '.jpg',
description : 'Новое фото',
likes : getRandomPositiveInteger(15,200),
comments :

};