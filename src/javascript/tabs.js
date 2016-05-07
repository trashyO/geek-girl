//Created by tracey on 7/05/2016.


(function () {
    "use strict";

    var contentElementTab1;
    var activeElementTab1;

    exports.initialise = function initialise(contentElement, activeElement) {
        this.addClass(contentElement, "hidden");
        this.addClass(activeElement, "active");

        contentElementTab1 = contentElement;
        activeElementTab1 = activeElement;
    };

    exports.swap = function swap(contentElement, activeElement) {
        this.initialise(contentElement, activeElement);
    };

    exports.addClass = function addClass(element, newClass) {
        if (element.getAttribute("class") !== null) {
            newClass = element.getAttribute("class") + " " + newClass;
        }

        element.setAttribute("class", newClass);
    };

    exports.removeClass = function removeClass(element, classToRemove) {
        element.classList.remove(classToRemove);
    };

}());
