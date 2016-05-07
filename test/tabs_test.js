//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");

    describe("Tabs", function(){

        it("Hide an element", function() {

            var element = document.createElement("div");
            document.body.appendChild(element);

            tabs.initialise(element);

            var display = getComputedStyle(element).display;
            console.log(display);
            assert.equal(display, "none");

        //var div = document.createElement("div");
        //div.innerHTML = "Playing with the DOM example";
        //document.body.appendChild(div);
        //div.parentNode.removeChild(div);
        });


    });

}());