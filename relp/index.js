// Menu Logic

const menu = document.querySelector('nav .collapse');
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});