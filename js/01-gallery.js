import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems.map((item) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
  </a>
  </li>`;
});

gallery.insertAdjacentHTML("afterbegin", galleryElements.join(""));

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();

  const eventModal = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">
`);

  eventModal.show();


    document.addEventListener('keydown', (ev) => {
      if (ev.key === "Escape") {
        eventModal.close()
      }
    })

});
