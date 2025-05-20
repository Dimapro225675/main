const vakans = document.querySelector('#vakansi__activ');
const vakansClose = document.querySelector('#vakansi__activ2');
const vakans2 = document.querySelector('#vakansi__activ3');
const vakansClose2 = document.querySelector('#vakansi__activ4');
const vakans3 = document.querySelector('#vakansi__activ5');
const vakansClose3 = document.querySelector('#vakansi__activ6');
const menu0 = document.querySelector('#vakansi__act0');
const menu = document.querySelector('#vakansi__act');
const menu2 = document.querySelector('#vakansi__act2');
const menu3 = document.querySelector('#vakansi__act3');
const menu4 = document.querySelector('#vakansi__act4');
const menu5 = document.querySelector('#vakansi__act5');
const menu6 = document.querySelector('#vakansi__act6');
const menu7 = document.querySelector('#vakansi__act7');
const menu8 = document.querySelector('#vakansi__act8');

vakans.addEventListener('click', function () {
    vakansClose.classList.add('activeC');
    vakans.classList.add('activeC');
});

vakans.addEventListener('click', function () {
    menu.classList.add('active2');
});

vakans.addEventListener('click', function () {
    menu2.classList.add('active2');
});

vakansClose.addEventListener('click', function () {
    menu.classList.remove('active2');
    vakansClose.classList.remove('activeC');
    vakans.classList.remove('activeC');
});

vakansClose.addEventListener('click', function () {
    menu2.classList.remove('active2');
    vakansClose.classList.remove('activeC');
    vakans.classList.remove('activeC');
});

menu.addEventListener('click', function () {
    menu0.classList.add('active');
    menu.classList.remove('active2');
    menu2.classList.remove('active2');
    menu3.classList.add('active');
    vakansClose2.classList.remove('activeC');
    vakans2.classList.remove('activeC');
});

vakans2.addEventListener('click', function () {
    vakansClose2.classList.add('activeC');
    vakans2.classList.add('activeC');
});

vakans2.addEventListener('click', function () {
    menu4.classList.add('active');
});

vakans2.addEventListener('click', function () {
    menu5.classList.add('active');
});

vakansClose2.addEventListener('click', function () {
    menu4.classList.remove('active');
    vakansClose2.classList.remove('activeC');
    vakans2.classList.remove('activeC');
});

vakansClose2.addEventListener('click', function () {
    menu5.classList.remove('active');
    vakansClose2.classList.remove('activeC');
    vakans2.classList.remove('activeC');
});

menu4.addEventListener('click', function () {
    menu0.classList.remove('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');
    menu5.classList.remove('active');
    vakansClose.classList.remove('activeC');
    vakans.classList.remove('activeC');
});

menu5.addEventListener('click', function () {
    menu6.classList.add('active');
    menu3.classList.remove('active');
    menu4.classList.remove('active');
    menu5.classList.remove('active');
    vakansClose3.classList.remove('activeC');
    vakans3.classList.remove('activeC');
});

menu2.addEventListener('click', function () {
    menu0.classList.add('active');
    menu.classList.remove('active2');
    menu2.classList.remove('active2');
    menu6.classList.add('active');
    vakansClose3.classList.remove('activeC');
    vakans3.classList.remove('activeC');
});

vakans3.addEventListener('click', function () {
    vakansClose3.classList.add('activeC');
    vakans3.classList.add('activeC');
});

vakans3.addEventListener('click', function () {
    menu7.classList.add('active');
});

vakans3.addEventListener('click', function () {
    menu8.classList.add('active');
});

vakansClose3.addEventListener('click', function () {
    menu7.classList.remove('active');
    vakansClose3.classList.remove('activeC');
    vakans3.classList.remove('activeC');
});

vakansClose3.addEventListener('click', function () {
    menu8.classList.remove('active');
    vakansClose3.classList.remove('activeC');
    vakans3.classList.remove('activeC');
});

menu7.addEventListener('click', function () {
    menu0.classList.remove('active');
    menu6.classList.remove('active');
    menu7.classList.remove('active');
    menu8.classList.remove('active');
    vakansClose.classList.remove('activeC');
    vakans.classList.remove('activeC');
});

menu8.addEventListener('click', function () {
    menu3.classList.add('active');
    menu6.classList.remove('active');
    menu7.classList.remove('active');
    menu8.classList.remove('active');
    vakansClose2.classList.remove('activeC');
    vakans2.classList.remove('activeC');
});

const menuBtn = document.querySelector('.menu-header');
const menuHeader = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuHeader.classList.toggle('active');
});