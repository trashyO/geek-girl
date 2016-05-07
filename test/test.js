//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");

    describe("Playing with the DOM", function(){

        it("Create element and add to body", function(){

            var div = document.createElement("div");

            div.innerHTML = "Playing with the DOM example";

            document.body.appendChild(div);

            var p = document.createElement("p");

            p.innerHTML = "Adding a paragraph to the DOM";

            document.body.appendChild(p);

            div.parentNode.removeChild(div);

        });

        it("When Tab 2 is clicked remove style from tab 1", function() {

            var tab1 = document.createElement("a");
            tab1.setAttribute("class", "active");
            tab1.innerHTML = "Tab 1";


            var tab2 = document.createElement("a");
            tab2.innerHTML = "Tab 2";

            assert.equal(tab1.getAttribute("class"), "active");
            assert.equal(tab2.getAttribute("class"), null);

            tab1.removeAttribute("class");
            tab2.setAttribute("class", "active");

            assert.equal(tab1.getAttribute("class"), null);
            assert.equal(tab2.getAttribute("class"), "active");

        });

    });

}());