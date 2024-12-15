import UnsplashAPI from './UnsplashAPI';
import renderImages from './render-function';

const galleryEl = document.querySelector('.gallery');

const api = new UnsplashAPI();

api.getPopularPhoto(1).then(data => {
  console.log(data);
  galleryEl.innerHTML = renderImages(data);
});
