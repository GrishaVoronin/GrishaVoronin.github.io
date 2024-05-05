const galleryItems = document.querySelectorAll('.photos__item');
const popupGallery = document.querySelector('.popup-gallery');
const popupImage = document.querySelector('.popup-image');
const popupPrev = document.querySelector('.popup-prev');
const popupNext = document.querySelector('.popup-next');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    openGallery();
  });
});

popupPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  }
  updateGallery();
});

popupNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }
  updateGallery();
});

function openGallery() {
  popupGallery.style.display = 'block';
  popupImage.src = galleryItems[currentIndex].src;
  updateArrows();
}

function updateGallery() {
  popupImage.src = galleryItems[currentIndex].src;
  updateArrows();
}

function updateArrows() {
  if (currentIndex === 0) {
    popupPrev.disabled = true;
  } else {
    popupPrev.disabled = false;
  }
  if (currentIndex === galleryItems.length - 1) {
    popupNext.disabled = true;
  } else {
    popupNext.disabled = false;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupGallery.style.display = 'none';
  }
});

const popupClose = document.getElementById('popup-close');

popupClose.addEventListener('click', () => {
  popupGallery.style.display = 'none';
});