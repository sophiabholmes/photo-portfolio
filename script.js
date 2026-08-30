const grid = document.getElementById('photoGrid');
const emptyState = document.getElementById('emptyState');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

let currentSet = [];
let currentIndex = 0;
let currentCategory = 'home';

function render(category) {
  currentCategory = category;
  currentSet = photos[category] || [];
  grid.innerHTML = '';

  emptyState.hidden = currentSet.length > 0;

  currentSet.forEach((photo, index) => {
    const figure = document.createElement('figure');
    figure.className = 'photo-card';
    figure.innerHTML = `<img src="${photo.src}" alt="${photo.alt || ''}" loading="lazy">`;
    figure.addEventListener('click', () => openLightbox(index));
    grid.appendChild(figure);
  });

  const hash = category === 'home' ? '' : `#${category}`;
  history.replaceState({ category }, '', `${location.pathname}${hash}`);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function openLightbox(index) {
  if (!currentSet.length) return;
  currentIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const photo = currentSet[currentIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt || '';
  lightboxCaption.textContent = photo.caption || '';
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

function nextPhoto() {
  if (!currentSet.length) return;
  currentIndex = (currentIndex + 1) % currentSet.length;
  updateLightbox();
}

function prevPhoto() {
  if (!currentSet.length) return;
  currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
  updateLightbox();
}

document.querySelectorAll('.js-category').forEach(button => {
  button.addEventListener('click', () => render(button.dataset.category));
});

document.querySelector('.js-home').addEventListener('click', () => render('home'));
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('nextPhoto').addEventListener('click', nextPhoto);
document.getElementById('prevPhoto').addEventListener('click', prevPhoto);

lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', event => {
  if (lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') nextPhoto();
  if (event.key === 'ArrowLeft') prevPhoto();
});

const initialCategory = location.hash.slice(1);
const validCategories = ['home', 'bts', 'events', 'portraits', 'objects'];
render(validCategories.includes(initialCategory) ? initialCategory : 'home');
