const navbar = document.getElementById('navbar-menu');
const button = document.getElementById('button-menu');

button.addEventListener('click', () => {
  navbar.classList.toggle('on');

});