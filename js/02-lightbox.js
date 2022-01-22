import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
  }).join('');  
};

 new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250});

    
    
    
    

