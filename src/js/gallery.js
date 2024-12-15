import UnsplashAPI from "./UnsplashAPI";

const api = new UnsplashAPI();

api.getPopularPhoto(1)
  .then(data => {
    console.log(data);
  })