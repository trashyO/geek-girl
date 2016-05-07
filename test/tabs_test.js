//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");

    /*
    TODO:
     */
    describe("Tabs", function(){

        it("Hide content element and add active class", function() {
            var tab1 = {contentElement: createElement("div"), tabElement: createElement("a")};
            var tab2 = {contentElement: createElement("div"), tabElement: createElement("a")};

            var tabElements = [tab1, tab2];

            tabs.initialise(tabElements);

            assert.equal(tab1.contentElement.className, "hidden");
            assert.equal(tab1.tabElement.className, "active");

            tearDown(tab1.contentElement, tab1.tabElement);
        });

        it("Switch tabs should change active tab and hidden content", function() {
            var tab1 = {contentElement: createElement("div"), tabElement: createElement("a")};
            var tab2 = {contentElement: createElement("div"), tabElement: createElement("a")};

            var tabElements = [tab1, tab2];

            tabs.initialise(tabElements);

            tabs.swap(tabElements, 1);

            assert.equal(tab1.contentElement.className, "");
            assert.equal(tab1.tabElement.className, "");
            assert.equal(tab2.contentElement.className, "hidden");
            assert.equal(tab2.tabElement.className, "active");

            tearDown([tab1.contentElement, tab1.tabElement, tab2.contentElement, tab2.tabElement]);
        });

        it("Reference to tab outside range is invalid", function() {
            var tab1 = {contentElement: createElement("div"), tabElement: createElement("a")};
            var tab2 = {contentElement: createElement("div"), tabElement: createElement("a")};

            var tabElements = [tab1, tab2];

            try {
                tabs.swap(tabElements, 2);
            } catch (err) {
                assert.equal(err, "index can't reference value greater than tabElements.length-1. Maximum index is: 1");
            }
        });

        it("Swap tabs are empty", function(){
            try {
                tabs.swap([], 1);
            } catch (err) {
                assert.equal(err, "tabElements can't be null or empty");
            }
        });

        it("Swap tabs are null", function(){
            try {
                tabs.swap(null, 1);
            } catch (err) {
                assert.equal(err, "tabElements can't be null or empty");
            }

        });

        it("Multiple tabs are active should reset all of them", function() {

        });

        it("Active tab is already ative", function() {

        });

        it("Apply class to element with no existing class", function(){
            var element = createElement("div");

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "hidden");

            tearDown([element]);
        });

        it("Apply class to element with existing class", function(){
            var element = createElement("div");
            element.className = "existing";

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "existing hidden");

            tearDown([element]);
        });

        it("Remove class from an element with no existing class", function() {
           var element = createElement("div");

           tabs.removeClass(element, "hidden");

            assert.equal(element.className, "");

            tearDown([element]);
        });

        it("Remove class from an element with existing class", function() {
            var element = createElement("div");
            element.classList.add("existing");
            element.classList.add("hidden");

            tabs.removeClass(element, "hidden");

            assert.equal(element.className, "existing");

            tearDown([element]);
        });


        function createElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }

        function tearDown(elements) {
            for(var i = 0; i < elements.length; i++) {
                elements[i].parentNode.removeChild(elements[i]);
            }
        }

    });

}());