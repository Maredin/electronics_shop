function getLink() {
    const btnProfil = document.querySelector('.header__tools-profile');

    btnProfil.addEventListener('click', () => {
        window.location.replace("http://127.0.0.1:5500/registr.html?#");
    });

}

export default getLink;