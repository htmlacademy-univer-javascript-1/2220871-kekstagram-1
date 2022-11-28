import { getRandomArrayElement, getRandomPositiveInteger } from './util';

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
/*
const description = [
  'Осеннее настроение',
  'Пишите, как проходит ваш день',
  'Мое лето',
  'Лучший день в моей жизни!',
  'За тобой хоть на край света',
  'Прекрасный вечер',
  'Точно особенный день',
];
*/
const names = [
  'Ольга',
  'Кирилл',
  'Андрей',
  'Дарья',
  'Мария',
  'Максим',
  'Евгений',
  'Анастасия',
  'Вера',
  'Анна',
];

function createRandomComments(size) {
  const comments = [];
  for (let i = 0; i < size; i++) {
    comments[i] = {
      id: i + 100,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(message),
      name: names[getRandomPositiveInteger(0, names.length - 1)],
    };
  }
  return comments;
}

export function createImageDescriptions(sizeDescription = 26) {
  const descriptions = [];
  for (let i = 1; i < sizeDescription; i++) {
    descriptions[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: '',
      likes: getRandomPositiveInteger(15, 200),
      comments: createRandomComments(6)
    };
  }
  return descriptions;
}

