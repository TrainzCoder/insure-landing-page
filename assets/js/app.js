const navbar = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');  
})