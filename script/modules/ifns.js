
// Функция Попап с таймером. Если таймер false, то таймер не работает
function ifns() {

    function postInn() {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        var token = "5fb4193913ae597cc2ed2b871a389cfca8c5d0a1";
        /* var query = "0276960223"; */

        const inn = document.querySelector('.contacts__form-completion input').value;

        var query = inn;

        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({ query: query })
        }

        let corp;
        let name = document.querySelector('.contacts__form-namecorp input');
        let kpp = document.querySelector('.contacts__form-kpp input');
        let innCorp = document.querySelector('.contacts__form-inn input');
        let dir = document.querySelector('.contacts__form-contactuser input');
        let adres = document.querySelector('.contacts__form-adres input');

        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                corp = result.suggestions[0].value;
                name.value = result.suggestions[0].value;
                kpp.value = result.suggestions[0].data.kpp;
                innCorp.value = result.suggestions[0].data.inn;
                dir.value = result.suggestions[0].data.management.name;
                adres.value = result.suggestions[0].data.address.value;
            })
            .catch(error => console.log("error", error));
        setTimeout(() => {
            console.log(corp);
        }, 2000)


    }

    const btnPostInn = document.querySelector('.contacts__form-completion button');

    btnPostInn.addEventListener('click', (e) => {
        e.preventDefault();
        postInn();
    });
}


export default ifns;