const galleryCards = document.querySelectorAll(".gallery__item");

galleryCards.forEach((item, index) => {
  item.classList.add(`gallery__item-${index + 1}`);
});
