import {showAlert} from './util.js';
const getData = (success) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((answer) =>
      answer.json())
    .then((pict) => {
      success(pict);
    })
    .catch(() => {
      showAlert('Не удалось загрузить изображения с сервера');
    });
};

const sendData = (success, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((answer) => {
      if (answer.ok) {
        success();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
