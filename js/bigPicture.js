import {isEscapeKey} from './util.js';

const MAX_COMMENTS_TO_SHOW = 5;
const biggerPicture = document.querySelector('.big-picture');
const closeBut = biggerPicture.querySelector('.big-picture__cancel');
const commentsLoader = biggerPicture.querySelector('.comments-loader');
const commentsContainer = biggerPicture.querySelector('.social__comments');
const commentsToShowCount = biggerPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');
let count = 0;

const createCommentItem = (comm) => {
  const newCommentItem = document.createElement('li');
  newCommentItem.classList.add('social__comment');
  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = comm.avatar;
  commentImage.alt = comm.name;
  commentImage.width = 35;
  commentImage.height = 35;
  newCommentItem.appendChild(commentImage);

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comm.message;
  newCommentItem.appendChild(commentText);
  return newCommentItem;
};

const showBigPicture = (pict) => {

  const onPopupEscKeydown = (event) => {
    if (isEscapeKey(event)) {
      event.preventDefault();
      closeBigPicture();
    }
  };

  const onPopupCloseButtonClick = () => {
    closeBigPicture();
  };

  function closeBigPicture() {
    biggerPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onPopupCloseButtonClick);
    commentsLoader.removeEventListener('click', commentsLoaderOnClick);
    count = 0;
  }

  function commentsLoaderOnClick() {
    count += MAX_COMMENTS_TO_SHOW;
    renderCommentsSlice();
  }

  function renderCommentsSlice() {
    commentsContainer.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();
    const commentsToShow = pict.comments.slice(0, count + MAX_COMMENTS_TO_SHOW);
    commentsToShow.forEach((comment) => {
      commentsFragment.appendChild(createCommentItem(comment));
    });
    commentsContainer.appendChild(commentsFragment);
    commentsLoader.classList.toggle('hidden', pict.comments.length === commentsToShow.length);
    commentsToShowCount.innerHTML = `${commentsToShow.length} из <span class="comments-count">${pict.comments.length}</span> комментариев`;
  }

  biggerPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  biggerPicture.querySelector('.big-picture__img img').src = pict.url;
  biggerPicture.querySelector('.likes-count').textContent = pict.likes;
  biggerPicture.querySelector('.comments-count').textContent = pict.comments.length;
  biggerPicture.querySelector('.social__caption').textContent = pict.description;

  renderCommentsSlice();
  commentsLoader.addEventListener('click', commentsLoaderOnClick);

  closeBut.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

export {showBigPicture};
