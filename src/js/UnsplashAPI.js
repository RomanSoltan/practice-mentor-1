import axios from "axios";

export default class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = ""

  // метод для популярних фото
  async getPopularPhotos(page) {
    const params = new URLSearchParams({
      query: "popular",
      page,
      per_page: 12,
      orientation: "portrait",
      client_id: this.#API_KEY,
    });

    const { data } = await axios(`${this.#BASE_URL}?${params}`);
    return data;
  }

  // метод для запиту зображеннь по пошуку
  async getPhotos(page) {
    const params = new URLSearchParams({
      query: this.#query,
      page,
      per_page: 12,
      orientation: "portrait",
      client_id: this.#API_KEY,
    });

    const { data } = await axios(`${this.#BASE_URL}?${params}`);
    return data;
  }

  // сетер для присвоєння значення в query
  set query(newQuery) {
    this.#query = newQuery; 
  }
}
