const btn = document.querySelector('.burger');
const menu = document.querySelector('.header__wrapper-orange');

const nav = document.querySelector('.header__nav');

// Показать бургер меню
function showBurgerMenu() {
    let res = nav.offsetHeight; //Высота блока навигации
    menu.style.height = res + 92 + 'px'; //раскрываем меню на высоту nav + 92px хз почему
}

// Скрыть бургер меню
function hideBurgerMenu() {
    menu.style.height = '54px';
}


function burger() {

    btn.addEventListener('click', () => {
        btn.classList.toggle('activeBurger'); // Тоглим новый класс активности

        btn.classList.contains('activeBurger') ? showBurgerMenu() : hideBurgerMenu(); // Условие  класс на бургер показывать или нет меню
    });



}

export default burger;

