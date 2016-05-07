//Created by tracey on 7/05/2016.


(function () {
    "use strict";


    exports.initialise = function initialise(contentElement, activeElement) {
        this.addClass(contentElement, "hidden");
        this.addClass(activeElement, "active");
    };

    exports.swap = function swap(hiddenContent, activeTab, contentElement, activeElement) {
        this.initialise(contentElement, activeElement);

        this.removeClass(hiddenContent, "hidden");
        this.removeClass(activeTab, "active");
    };

    exports.addClass = function addClass(element, classToAdd) {
        element.classList.add(classToAdd);
    };

    exports.removeClass = function removeClass(element, classToRemove) {
        element.classList.remove(classToRemove);
    };

}());
