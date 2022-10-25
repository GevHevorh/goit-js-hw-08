import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const createImageGallery = images =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join('');

galleryList.insertAdjacentHTML('afterbegin', createImageGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
