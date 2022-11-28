export function createUsersPictures(amount) {
  const picturesList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i++) {
    const userPicture = pictureTemplate.cloneNode(true);
    const image = userPicture.querySelector('.picture__img');
    const commentsCount = userPicture.querySelector('.picture__comments');
    const likesCount = userPicture.querySelector('.picture__likes');
    image.src = `../photos/${i}.jpg`;
    commentsCount.textContent = 4;
    likesCount.textContent = 11;
    pictureFragment.append(userPicture);
  }
  picturesList.append(pictureFragment);
}
