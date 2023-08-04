import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')     // елемент, в який будемо вкладати li

galleryEl.insertAdjacentHTML('afterbegin', createCardsMarkup(galleryItems))
galleryEl.addEventListener('click', handlerClickCard)

// створення шаблону li
function createCardsMarkup(arr) {
    return arr.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}


function handlerClickCard(evt) {
  evt.preventDefault()   // щоб не переходило на нову сторінку, або щоб не завантажувалося
if (evt.target === evt.currentTarget) {
  return   // щоб не реагувало на клік за межами li
}
  // реагує на клік за межами li
  const currentProduct = evt.target.dataset.source     // змінна - посилання на велике зображення
//  інсталізація модального вікна через бібліотеку
  const instance = basicLightbox.create(`
      <img src="${currentProduct}" width="800" height="600">
      `)

  instance.show()       // викликаємо модалку

  document.addEventListener("keydown", onPressEsc)//  вішаємо слухача на Escape

  function onPressEsc(event){
  if (event.code === 'Escape') {    // key?????
   
    instance.close()
   document.removeEventListener("keydown", onPressEsc) } //  знімаємо слухача на Escape

}
  
}



