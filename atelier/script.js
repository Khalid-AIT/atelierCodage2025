// Simple animation on page load
window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.main-image');
  image.style.opacity = 0;
  setTimeout(() => {
    image.style.transition = 'opacity 2s ease-in-out';
    image.style.opacity = 1;
  }, 300);
});
