//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var math = require("./../src/math.js");
    var assert = require("./assertions.js");

    describe("Addition", function() {

        it("add 2 numbers", function() {
            assert.equal(math.add(3, 4), 7);
        });

        it("IEEE 754 floating point", function() {
            assert.equal(math.add(0.1, 0.2), 0.30000000000000004);
        });
    });

    describe("Subtraction", function() {
        it("subtract 2 positive numbers", function(){
            assert.equal(3, math.subtract(10, 7));
        });
    });

}());