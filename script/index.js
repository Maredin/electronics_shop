
import burger from "./modules/burger.js";
import getLink from "./modules/getLink.js";
import ifns from "./modules/ifns.js";
import popup from "./modules/popup.js";
import validateFormReg from "./modules/validateFormReg.js";

window.addEventListener('DOMContentLoaded', () => {
    switch (window.location.href) {

        case (window.location.origin + '/electronics_shop/registr.html' || window.location.origin + '/electronics_shop/registr.html?'):
            ifns();
            validateFormReg();
    }
    burger();
    popup();
});