import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelector('.gallery');
const cardsImage = createGalleryItemCardsImage(galleryItems);
let originalImage;

galleryImages.insertAdjacentHTML('beforeend', cardsImage);

galleryImages.addEventListener('keydown', onClickEscCloseImage);

function createGalleryItemCardsImage(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                 />
             </a>
        </div>
        `;
        })
        .join('');
}

galleryImages.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    originalImage = basicLightbox.create(`
		<img src="${evt.target.dataset.source}" width="1200" height="900">
	`)
    originalImage.show()
});


function onClickEscCloseImage(evt) {
if (evt.code !== 'Escape') {
      return;
    }
    originalImage.close();
}
console.log(galleryItems);
