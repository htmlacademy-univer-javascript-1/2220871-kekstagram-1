import {showBigPicture} from './bigPicture.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createUserPhoto = (pict) => {
  const elem = template.cloneNode(true);
  elem.querySelector('.picture__img').src = pict.url;
  elem.querySelector('.picture__likes').textContent = pict.likes;
  elem.querySelector('.picture__comments').textContent = pict.comments.length;
  elem.addEventListener('click', () => {
    showBigPicture(pict);
  });
  fragment.appendChild(elem);
};

const renderUserPhotos = (pict) => {
  pict.forEach((picture) => {
    createUserPhoto(picture);
  });
  return container.appendChild(fragment);
};


export {renderUserPhotos};
