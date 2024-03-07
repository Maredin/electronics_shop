function catalog() {
    const arrTest = [
        {
            img: 'https://rosarmatorg.ru/image/cache/catalog/prod_img/6ab52bf02c5ea5b9d4b37fb4aa586c05-1200x800.jpg',
            title: 'Фильтр'
        },

        {
            img: 'https://www.cleangoods.ru/upload/iblock/04e/oxc9k7xb1njovq1j94klanf3vanpk34m.jpg',
            title: 'Смеситель'
        },

        {
            img: 'https://oneandhome.ru/sites/default/files/blog/svetodizajn-v-interere-19.jpg',
            title: 'Люстра'
        },

        {
            img: 'https://www.damaresi.com/wp-content/uploads/2022/11/TAA-2.jpg',
            title: 'Прожектор'
        },

        {
            img: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id4257272156783795074/orig',
            title: 'Магнитола'
        },
        {
            img: 'https://rosarmatorg.ru/image/cache/catalog/prod_img/6ab52bf02c5ea5b9d4b37fb4aa586c05-1200x800.jpg',
            title: 'Фильтр'
        },

        {
            img: 'https://www.cleangoods.ru/upload/iblock/04e/oxc9k7xb1njovq1j94klanf3vanpk34m.jpg',
            title: 'Смеситель'
        },

        {
            img: 'https://oneandhome.ru/sites/default/files/blog/svetodizajn-v-interere-19.jpg',
            title: 'Люстра'
        },

        {
            img: 'https://www.damaresi.com/wp-content/uploads/2022/11/TAA-2.jpg',
            title: 'Прожектор'
        },

        {
            img: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id4257272156783795074/orig',
            title: 'Магнитола'
        },
    ];

    const wrapperNav = document.querySelector('.catalog__nav');

    function addCartNav(img, title) {
        const div = document.createElement('div');
        div.classList.add('catalog__nav-catr');
        div.innerHTML = `
                <img src=${img}
                    alt="img" class="catalog__nav-img">
                <h3 class="catalog__nav-title">${title}</h3>
        `;
        wrapperNav.append(div);
    }

    arrTest.map((item => {
        addCartNav(item.img, item.title)
    }));
}

export default catalog;