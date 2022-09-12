const hamburger = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menumain = document.querySelector('.menu-main');
const cancel = document.querySelector('.cancel');

hamburger.addEventListener('click', () => {
  menumain.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});
