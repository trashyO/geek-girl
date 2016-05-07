//Created by tracey on 7/05/2016.


(function () {
    "use strict";


    exports.initialise = function initialise(tabElements) {
        var content = tabElements[0].contentElement;
        var tab = tabElements[0].tabElement;

        this.addClass(content, "hidden");
        this.addClass(tab, "active");
    };

    exports.swap = function swap(hiddenContent, activeTab, contentElement, activeElement) {
        this.initialise([{contentElement: contentElement, tabElement: activeElement}]);

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
