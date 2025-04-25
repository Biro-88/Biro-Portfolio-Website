const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
