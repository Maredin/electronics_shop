
import burger from "./modules/burger.js";
import getLink from "./modules/getLink.js";
import ifns from "./modules/ifns.js";
import popup from "./modules/popup.js";

window.addEventListener('DOMContentLoaded', () => {
    switch (window.location.href) {
        case (window.location.origin + '/registr.html'):
            console.log(123456);
            ifns();
    }

    burger();
    popup();
});