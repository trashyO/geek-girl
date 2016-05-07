//Created by tracey on 7/05/2016.


(function () {
    "use strict";

    exports.initialise = function initialise(contentElement, activeElement) {
        contentElement.style.display = "None";
        activeElement.className = "active";

    };

    exports.addClass = function addClass(element, newClass) {
        if (element.getAttribute("class") !== null) {
            newClass = element.getAttribute("class") + " " + newClass;
        }

        element.setAttribute("class", newClass);
    };

}());
