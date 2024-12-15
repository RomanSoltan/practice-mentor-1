const renderImages = (images) => {
  return images
  .map(
      image => `
      <li class="gallery__item">
      <img class="gallery-img" src="${image.urls.small}" alt="${image.alt_description}">
      </li>
      `
  ).join("")
}

export default renderImages;

// export default function renderImages(arr) {
//   return arr
//     .map(
//       ({ urls: { small }, alt_description }) => `
//       <li class="gallery__item">
//         <img class="gallery-img" src="${small}" alt="${alt_description}" />
//       </li>
//   `
//     )
//     .join('');
// }
