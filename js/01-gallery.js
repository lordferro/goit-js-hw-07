import { galleryItems } from "./gallery-items.js";

// Change code below this line
let modal = null;

const galleryRef =
  document.querySelector(".gallery");

const galleryItemsMarkup =
  makeGalleryMarkup(galleryItems);

//   Insert markup in DOM
galleryRef.insertAdjacentHTML(
  "afterbegin",
  galleryItemsMarkup
);

// Listener
galleryRef.addEventListener(
  "click",
  onGalleryItemClick
);

// function to make gallery markup
function makeGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// delegetion
function onGalleryItemClick(evt) {
  evt.preventDefault();
  
  if (
    evt.target.nodeName !== "IMG"
  ) {
    return;
  }

  const originalLink = evt.target.dataset.source;

  modal = basicLightbox.create(
    `<img width="1400" height="900" src="${originalLink}">`,
    {
      onShow: () => {
        document.addEventListener(
          "keydown", closeModal       
        );
      },
      onClose: () => {
        document.removeEventListener(
          "keydown",
          closeModal
        );
      }
    }
  );
  modal.show();
}

function closeModal(evt) {
  if (evt.code === "Escape") {
    modal.close();
  }
}