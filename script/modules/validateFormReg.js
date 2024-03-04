
function validateFormReg() {
    console.log(123);
    const inn = document.querySelector('.contacts__form-inn input');
    const kpp = document.querySelector('.contacts__form-kpp input');
    const tel = document.querySelector('.contacts__form-tel input');

    let numbArr = [inn, kpp, tel]

    function numbValidate(e) {
        e.value = e.value.replace(/[^0-9]/g, '');
    }

    for (let item of numbArr) {
        item.addEventListener('input', () => {
            numbValidate(item)
        })
    }

}

export default validateFormReg;