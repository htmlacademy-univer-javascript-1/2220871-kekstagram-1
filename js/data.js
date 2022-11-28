import { getRandomArrayElement, getRandomPositiveInteger } from './util';

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const pictureDescribe = [
  'Давайте разбираться: героям были возданы соответствующие почести', 'Господа, кровь стынет в жилах!',
  'Граница обучения кадров одухотворила всех причастных', 'Благородные стремления не спасут: кровь стынет в жилах',
  'Не следует забывать, что младая поросль матереет', 'Выбранный нами инновационный путь обнадёживает',
  'Прототип нового сервиса — это как звон колоколов', 'Смешно, но герцог графства коронован',
  'Органический трафик попахивает безумием', 'Высококачественный прототип будущего проекта определил дальнейшее развитие'
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

export function createImageDescribe(sizeDescription) {
  const descriptions = [];
  for (let i = 0; i < sizeDescription; i++) {
    descriptions[i] = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(pictureDescribe),
      likes: getRandomPositiveInteger(15, 200),
      comments: createRandomComments(6)
    };
  }
  return descriptions;
}

