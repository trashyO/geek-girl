//Created by tracey on 12/12/2015.
(function () {
    "use strict";

    describe("Addition", function(){

        it("add 2 numbers", function() {
            expect(add(3, 4)).toEqual(7);
        });

        it("IEEE 754 floating point", function() {
            expect(add(0.1, 0.2)).toEqual(0.30000000000000004);
        });
    });

    function add(a, b) {
        return a + b;
    }
}());