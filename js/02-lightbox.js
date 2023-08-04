import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('afterbegin', createCardsMarkup(galleryItems))
galleryEl.addEventListener('click', handlerClickCard)

function createCardsMarkup(arr) {
     return arr.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}

function handlerClickCard(evt) { 
evt.preventDefault()   
if (evt.target === evt.currentTarget) {
  return 
} 
    let lightbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': 250,});

   
}