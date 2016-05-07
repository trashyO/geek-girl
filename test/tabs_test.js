//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");

    /*
    TODO:
     */
    describe("Tabs", function(){

        it("Hide content element and add active class", function() {
            var contentElement = createElement("div");
            var activeElement = createElement("a");

            tabs.initialise(contentElement, activeElement);

            assert.equal(getComputedStyle(contentElement).display, "none");
            assert.equal(activeElement.className, "active");

            // Clean up
            contentElement.parentNode.removeChild(contentElement);
            activeElement.parentNode.removeChild(activeElement);
        });

        function createElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }

    });

}());