//Created by tracey on 12/12/2015.
/* globals describe:false, it:false, beforeEach:false, afterEach:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");

    /*
    TODO:

    Learn markdown for todos

    Implement chai for assertions
     */
    describe("Tabs", function(){

        var container;

        beforeEach(function() {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function() {
            container.parentNode.removeChild(container);
        });


        it("Hide content element and add active class", function() {
            var tab1 = createTab();
            var tab2 = createTab();

            var tabElements = [tab1, tab2];

            tabs.initialise(tabElements);

            assertTabIsActive(tab1);
        });

        it("Switch tabs should change active tab and hidden content", function() {
            var tab1 = createTab();
            var tab2 = createTab();

            var tabElements = [tab1, tab2];
            tabs.initialise(tabElements);

            tabs.swap(tabElements, 1);

            assertTabIsInactive(tab1);
            assertTabIsActive(tab2);
        });


        it("Reference to tab outside range is invalid", function() {
            var tab1 = createTab();
            var tab2 = createTab();

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
            var tab1 = createTab();
            var tab2 = createTab();
            var tab3 = createTab();

            var tabElements = [tab1, tab2, tab3];

            tabs.makeActive(tab1);
            tabs.makeActive(tab2);

            tabs.swap(tabElements, 2);

            assertTabIsInactive(tab1);
            assertTabIsInactive(tab2);
            assertTabIsActive(tab3);
        });

        it("Initialise resets any already active tabs", function() {
            var tab1 = createTab();
            var tab2 = createTab();

            var tabElements = [tab1, tab2];

            tabs.makeActive(tab1);
            tabs.makeActive(tab2);

            tabs.initialise(tabElements);

            assertTabIsActive(tab1);
            assertTabIsInactive(tab2);
        });

        it("Apply class to element with no existing class", function(){
            var element = createElement("div");

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "hidden");
        });

        it("Apply class to element with existing class", function(){
            var element = createElement("div");
            element.className = "existing";

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "existing hidden");
        });

        it("Remove class from an element with no existing class", function() {
           var element = createElement("div");

           tabs.removeClass(element, "hidden");

            assert.equal(element.className, "");
        });

        it("Remove class from an element with existing class", function() {
            var element = createElement("div");
            element.classList.add("existing");
            element.classList.add("hidden");

            tabs.removeClass(element, "hidden");

            assert.equal(element.className, "existing");
        });

        function createTab() {
            return {contentElement: createElement("div"), tabElement: createElement("a")};
        }

        function assertTabIsInactive(tab) {
            assert.equal(tab.contentElement.className, "");
            assert.equal(tab.tabElement.className, "");
        }


        function assertTabIsActive(tab) {
            assert.equal(tab.contentElement.className, "hidden");
            assert.equal(tab.tabElement.className, "active");
        }

        function createElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

    });

}());