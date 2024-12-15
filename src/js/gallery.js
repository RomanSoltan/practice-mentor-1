import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import err from '../img/javascript.svg';

import UnsplashAPI from './UnsplashAPI';
import renderImages from './render-function';

const galleryEl = document.querySelector('.gallery');
const form = document.querySelector('.js-search-form');
const container = document.getElementById('tui-pagination-container');

form.addEventListener('submit', handleSubmit);

const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});
const page = pagination.getCurrentPage();

const api = new UnsplashAPI();
api.getPopularPhotos(page).then(data => {
  console.log(data);
  galleryEl.innerHTML = renderImages(data.results);
  // додамо до пагінації загальну кількісь фото
  pagination.reset(data.total);
});

// повісимо слухача події на пагінацію
pagination.on('afterMove', handlePagination);

// пагінація для популярних фото
function handlePagination(event) {
  // номер сторінки, який натиснули в пагінації
  const currentPage = event.page;
  // зробимо запит з номером сторінки, який натиснули в пагінації
  api
    .getPopularPhotos(currentPage)
    .then(data => (galleryEl.innerHTML = renderImages(data.results)));
}

// пагінація для фото, які прийшли за запитом користувача
function handleSubmitPagination(event) {
  const currentPage = event.page;
  api.getPhotos(currentPage)
    .then(data => galleryEl.innerHTML = renderImages(data.results))
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = form.elements.query.value.trim();
  console.log(inputValue);

  if (!inputValue) {
    iziToast.warning({
      title: 'Caution',
      message: 'The field is empty, please type your request',
      position: 'topRight',
      iconUrl: `${err}`,
    });
    return;
  }
  // відпшемося від слухача події, щоб не було збільшення запитів
  pagination.off("afterMove", handlePagination);
  pagination.off("afterMove", handleSubmitPagination);

  // передамо дані, які ввів користувач у
  api.query = inputValue;
  // зробимо запит на сервер викликавши метод getPhotos
  api.getPhotos(page).then(data => {
    galleryEl.innerHTML = renderImages(data.results);
    pagination.reset(data.total);
  });
  // повісимо слухача події
  pagination.on("afterMove", handleSubmitPagination);
}
