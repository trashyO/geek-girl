//Created by tracey on 12/12/2015.
(function () {
    "use strict";

    let chai = require("chai"),
        assert = chai.assert,
        expect = chai.expect,
        should = chai.should();

    describe("Addition", function(){

        it("add 2 numbers", function() {
            assert.equal(add(3, 4), 7);
        });

        it("IEEE 754 floating point", function() {
            assert.equal(add(0.1, 0.2), 0.30000000000000004);
        });
    });

    function add(a, b) {
        return a + b;
    }
}());