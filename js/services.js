const button = document.getElementById('modalbtn');
const button2 = document.getElementById('modalbtn2');
const button3 = document.getElementById('modalbtn3');
const button4 = document.getElementById('modalbtn4');
const button5 = document.getElementById('modalbtn5');
const button6 = document.getElementById('modalbtn6');
const modalWindow = document.querySelector('.modal2');
const body = document.body;
const modalCloseBtn = document.querySelector('.modal__exit2')

button.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button2.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button3.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button4.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button5.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button6.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('active');
    body.classList.remove('active');
});

const menuBtn = document.querySelector('.menu-header');
const menuHeader = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuHeader.classList.toggle('active');
});