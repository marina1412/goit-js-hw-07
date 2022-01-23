import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainerRef.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
`;
  }).join('');  
};

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  const image = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);

  instance.show();
  
  document.addEventListener("keydown", onEscDown);

  function onEscDown(event) {
    if (event.code === "Escape") {
      instance.close(() => document.removeEventListener("keydown", onEscDown));
    };
  }
};
