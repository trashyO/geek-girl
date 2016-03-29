//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    //let chai = require("chai"),
    //    assert = chai.assert,
    //    expect = chai.expect,
    //    should = chai.should();

    describe("Addition", function(){

        it("add 2 numbers", function() {
            assertEqual(add(3, 4), 7);
        });

        it("IEEE 754 floating point", function() {
            assertEqual(add(0.1, 0.2), 0.30000000000000004);
        });
    });

    function assertEqual(actual, expected) {
        if (actual !== expected) {
            throw new Error("Expected " + expected + " but got " + actual);
        }
    }

    function add(a, b) {
        return a + b;
    }
}());