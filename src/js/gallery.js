import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import UnsplashAPI from './UnsplashAPI';
import renderImages from './render-function';

const galleryEl = document.querySelector('.gallery');
const api = new UnsplashAPI();
const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

api.getPopularPhotos(page).then(data => {
  console.log(data);
  galleryEl.innerHTML = renderImages(data.results);
  // додамо до пагінації загальну кількісь фото
  pagination.reset(data.total);
});

// повісимо слухача події на пагінацію
pagination.on('afterMove', event => {
  // номер сторінки, який натиснули в пагінації
  const currentPage = event.page;
  // зробимо запит з номером сторінки, який натиснули в пагінації
  api
    .getPopularPhotos(currentPage)
    .then(data => (galleryEl.innerHTML = renderImages(data.results)));
});
