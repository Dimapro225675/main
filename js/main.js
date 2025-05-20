const button = document.getElementById('buttonm');
const button1 = document.getElementById('buttonm1');
const button2 = document.getElementById('buttonm2');
const button3 = document.getElementById('buttonm3');
const button4 = document.getElementById('buttonm4');
const button5 = document.getElementById('buttonm5');
const button6 = document.getElementById('buttonm6');
const buttonValera = document.getElementById('button-Valera');
const buttonded = document.getElementById('button-ded');
const buttonleha = document.getElementById('button-leha');
const buttonpsih = document.getElementById('button-psih');
const modalWindow_psih = document.querySelector('.modal__barber-psih');
const modalWindow_leha = document.querySelector('.modal__barber-leha');
const modalWindow_ded = document.querySelector('.modal__barber-ded');
const modalWindow_Valera = document.querySelector('.modal__barber-Valera');
const modalWindow = document.querySelector('.modal');
const body = document.body;
const modalCloseBtn = document.querySelector('.modal__exit')

const modalCloseBtnValera = document.querySelector('.valera__exit')
const modalCloseBtnDed = document.querySelector('.ded__exit')
const modalCloseBtnLeha = document.querySelector('.leha__exit')
const modalCloseBtnPsih = document.querySelector('.psih__exit')

button.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

button1.addEventListener('click', function () {
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

buttonValera.addEventListener('click', function () {
    modalWindow_Valera.classList.add('active');
    body.classList.add('active');
});

buttonded.addEventListener('click', function () {
    modalWindow_ded.classList.add('active');
    body.classList.add('active');
});

buttonleha.addEventListener('click', function () {
    modalWindow_leha.classList.add('active');
    body.classList.add('active');
});

buttonpsih.addEventListener('click', function () {
    modalWindow_psih.classList.add('active');
    body.classList.add('active');
});

modalCloseBtnValera.addEventListener('click', function () {
    modalWindow_Valera.classList.remove('active');
    body.classList.remove('active');
});

modalCloseBtnDed.addEventListener('click', function () {
    modalWindow_ded.classList.remove('active');
    body.classList.remove('active');
});

modalCloseBtnLeha.addEventListener('click', function () {
    modalWindow_leha.classList.remove('active');
    body.classList.remove('active');
});

modalCloseBtnPsih.addEventListener('click', function () {
    modalWindow_psih.classList.remove('active');
    body.classList.remove('active');
});

modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('active');
    body.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 28,

    navigation: {
        nextEl: '.card__btn--prev',
        prevEl: '.card__btn--next',
    }
});

const menuBtn = document.querySelector('.menu-header');
const menuHeader = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuHeader.classList.toggle('active');
});