function getLink() {
    const btnProfil = document.querySelector('.header__tools-profile');

    btnProfil.addEventListener('click', () => {
        window.location.replace(window.location.origin + '/registr.html');
    });

}

export default getLink;