//Created by tracey on 7/05/2016.


(function () {
    "use strict";

    exports.initialise = function initialise(tabElements) {
        for(var i = 0; i < tabElements.length; i++) {
            var tab = tabElements[i];
            tab.tabElement.addEventListener("click", this.clickHandler(tabElements, i).bind(this));
        }

        this.swap(tabElements, 0);
    };

    exports.clickHandler = function clickHandler(tabElements, i) {
        return function(){
            this.swap(tabElements, i);
        };
    };

    exports.swap = function swap(tabElements, index) {
        if (tabElements === null || tabElements.length === 0) {
            throw (new Error("tabElements can't be null or empty"));
        }

        if(index >= tabElements.length) {
            throw (new Error("index can't reference value greater than tabElements.length-1. Maximum index is: " + (tabElements.length - 1)));
        }

        for (var i = 0; i < tabElements.length; i++) {
            this.makeInactive(tabElements[i]);
        }

        this.makeActive(tabElements[index]);
    };

    exports.makeActive = function makeActive(tab) {
        this.removeClass(tab.contentElement, "hidden");
        this.addClass(tab.tabElement, "active");
    };

    exports.makeInactive = function makeInactive(tab) {
        this.addClass(tab.contentElement, "hidden");
        this.removeClass(tab.tabElement, "active");
    };

    exports.addClass = function addClass(element, classToAdd) {
        element.classList.add(classToAdd);
    };

    exports.removeClass = function removeClass(element, classToRemove) {
        element.classList.remove(classToRemove);
    };

}());
