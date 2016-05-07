//Created by tracey on 7/05/2016.


(function () {
    "use strict";


    exports.makeActive = function makeActive(tab) {
        this.addClass(tab.contentElement, "hidden");
        this.addClass(tab.tabElement, "active");
    };

    exports.initialise = function initialise(tabElements) {
        this.makeActive(tabElements[0]);
    };

    exports.swap = function swap(tabElements, index) {
        if (tabElements.length === 0) {
            throw new Error("tabElements can't be null or empty");
        }
        this.makeActive(tabElements[index]);

        this.removeClass(tabElements[0].contentElement, "hidden");
        this.removeClass(tabElements[0].tabElement, "active");
    };

    exports.addClass = function addClass(element, classToAdd) {
        element.classList.add(classToAdd);
    };

    exports.removeClass = function removeClass(element, classToRemove) {
        element.classList.remove(classToRemove);
    };

}());
