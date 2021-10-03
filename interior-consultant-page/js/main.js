const menuBtn = document.querySelector('.navbar__burger');
const navMenu = document.querySelector('.navbar__menu ');
const menuItem = document.querySelectorAll('.navbar__menu-item');
const ul = document.querySelector('ul');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navMenu.classList.toggle('navbar--active');
});
menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');

    item.classList.add('active');
  });
});
