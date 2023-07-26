// const menuToggle = document.querySelector('.menu-toggle');
// const sidebar = document.querySelector('.sidebar');
// const overlay = document.querySelector('.overlay');

// menuToggle.addEventListener('click', function() {
//   menuToggle.classList.toggle('active');
//   sidebar.classList.toggle('active');
//   overlay.classList.toggle('active');
// });

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  overlay.classList.toggle('active');
});