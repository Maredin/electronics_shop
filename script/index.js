
import burger from "./modules/burger.js";
import getLink from "./modules/getLink.js";
import ifns from "./modules/ifns.js";
import popup from "./modules/popup.js";
import validateFormReg from "./modules/validateFormReg.js";
import catalog from "./modules/catalog.js";


window.addEventListener('DOMContentLoaded', () => {
    const domin = '/electronics_shop';
    /* const domin = ''; */
    switch (window.location.href) {

        case (window.location.origin + `${domin}/registr.html` || window.location.origin + `${domin}/registr.html?`):
            ifns();
            validateFormReg();

        case (window.location.origin + `${domin}/catalog.html` || window.location.origin + `${domin}/catalog.html?`):
            catalog();

    }


    burger();
    popup();
});