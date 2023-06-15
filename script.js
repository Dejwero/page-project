const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('#menu');
const hamburgerBtn = document.querySelector('.hamburger');

function toggleMenu() {
  menu.classList.toggle('show');
}

function close(event) {
  if (event.target.classList.contains('menu-item')) {
    menu.classList.remove('show');
  }
}

hamburgerBtn.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menu.addEventListener('click', (event) => close(event));
