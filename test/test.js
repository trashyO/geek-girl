//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var addition = require("./../src/addition.js");
    var assert = require("./assertions.js");

    describe("Addition", function() {

        it("add 2 numbers", function() {
            assert.equal(addition.add(3, 4), 7);
        });

        it("IEEE 754 floating point", function() {
            assert.equal(addition.add(0.1, 0.2), 0.30000000000000004);
        });
    });

}());