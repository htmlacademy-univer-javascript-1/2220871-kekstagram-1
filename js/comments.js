import {body} from './formSettings.js';
import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successFragment = document.createDocumentFragment();
const errorFragment = document.createDocumentFragment();


const showMessageSuccess = () => {
  const messageSuccess = successTemplate.cloneNode(true);
  successFragment.appendChild(messageSuccess);
  body.appendChild(successFragment);
  const buttonSuccess = document.querySelector('.success__button');
  const sectSuccess = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      sectSuccess.remove();
    }
  });
  sectSuccess.addEventListener(('click'), (event) => {
    if (event.target === buttonSuccess) {
      sectSuccess.remove();
    }
  });
  sectSuccess.addEventListener(('click'), (event) => {
    if (event.target === successInner) {
      sectSuccess.remove();
    }
  });
};

const showMessageError = () => {
  const messageError = errorTemplate.cloneNode(true);
  errorFragment.appendChild(messageError);
  body.appendChild(errorFragment);
  const buttonError = document.querySelector('.error__button');
  const sectionError = document.querySelector('.error');
  const errorInner = document.querySelector('.error__inner');
  document.addEventListener('keydown', (event) => {
    if (isEscapeKey(event)) {
      sectionError.remove();
    }
  });
  sectionError.addEventListener(('click'), (event) => {
    if (event.target === buttonError) {
      sectionError.remove();
    }
  });
  sectionError.addEventListener(('click'), (event) => {
    if (event.target === errorInner) {
      sectionError.remove();
    }
  });
};

export {showMessageSuccess, showMessageError};
