//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");

    /*
    TODO:
    1. Hide element when tab selected
    2. Add style when tab selected
     */
    describe("Tabs", function(){

        it("Hide content element and add active class", function() {

            var contentElement = document.createElement("div");
            var activeElement = document.createElement("a");

            document.body.appendChild(contentElement);
            document.body.appendChild(activeElement);

            tabs.initialise(contentElement, activeElement);

            var display = getComputedStyle(contentElement).display;
            var activeClass = activeElement.className;

            console.log(display);
            console.log(activeClass);
            assert.equal(display, "none");
            assert.equal(activeClass, "active");

            // Clean up
            contentElement.parentNode.removeChild(contentElement);
            activeElement.parentNode.removeChild(activeElement);

        //var div = document.createElement("div");
        //div.innerHTML = "Playing with the DOM example";
        //document.body.appendChild(div);
        //div.parentNode.removeChild(div);
        });


    });

}());