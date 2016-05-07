//Created by tracey on 7/05/2016.


(function () {
    "use strict";

    exports.initialise = function initialise(contentElement, activeElement) {
        this.addClass(contentElement, "hidden");
        this.addClass(activeElement, "active");
    };

    exports.addClass = function addClass(element, newClass) {
        if (element.getAttribute("class") !== null) {
            newClass = element.getAttribute("class") + " " + newClass;
        }

        element.setAttribute("class", newClass);
    };

}());
