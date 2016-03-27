//Created by tracey on 12/12/2015.


(function () {
    "use strict";

    let chai = require("chai"),
        assert = chai.assert,
        expect = chai.expect,
        should = chai.should();

    assert.equal(add(3, 4), 7);
    expect(add(3, 4)).to.equal(7);
    add(3, 4).should.equal(7);

    function add(a, b) {
        return a +   b;
    }
}());
