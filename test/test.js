//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");

    describe("Playing with the DOM", function(){

        it("Creeat element and add to body", function(){

         var div = document.createElement("div");

        div.innerHTML = "Playing with the DOM example";

        document.body.appendChild(div);

        var p = document.createElement("p");

        p.innerHTML = "Adding a paragraph to the DOM";

        document.body.appendChild(p);

        //div.remove();

        });

    });

}());