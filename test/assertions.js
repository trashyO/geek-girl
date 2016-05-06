//Created by tracey on 6/05/2016.


(function () {
    "use strict";

    exports.equal = function equal(actual, expected) {
        if (actual !== expected) {
            throw new Error("Expected " + expected + " but got " + actual);
        }
    };

}());
