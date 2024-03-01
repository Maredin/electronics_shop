

function popup() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.popup-close');
    const enterBtn = document.querySelector('.header__tools-profile');

    // Ширина скрола на странице
    let scrollWidth = window.innerWidth - document.documentElement.clientWidth;

    function showModal() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';

        document.body.style.paddingRight = scrollWidth + 'px';
    }

    function hideModal() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.paddingRight = 0;
    }


    enterBtn.addEventListener('click', showModal);
    close.addEventListener('click', hideModal);

}

export default popup;