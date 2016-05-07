//Created by tracey on 12/12/2015.
/* globals describe:false, it:false  */

(function () {
    "use strict";

    var assert = require("./assertions.js");
    var tabs = require("./../src/javascript/tabs.js");
    var tab = require("./../src/javascript/tab.js");

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

            tabs.initialise([tab1]);

            var contentElementTab2 = createElement("div");
            var activeElementTab2 = createElement("a");

            tabs.swap(tab1.contentElement, tab1.tabElement, contentElementTab2, activeElementTab2);

            assert.equal(tab1.contentElement.className, "");
            assert.equal(tab1.tabElement.className, "");
            assert.equal(contentElementTab2.className, "hidden");
            assert.equal(activeElementTab2.className, "active");

            tearDown([tab1.contentElement, tab1.tabElement, contentElementTab2, activeElementTab2]);
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