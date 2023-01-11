import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

const listItemsMarkup =
    makeListMarkup(galleryItems);
  
listEl.innerHTML = listItemsMarkup;

function makeListMarkup(items) {
  return items
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>`;
    })
    .join("");
}

const imgEl = document.querySelector('.gallery__image');
console.log(imgEl);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});