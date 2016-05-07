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
            var contentElement = createElement("div");
            var activeElement = createElement("a");

            tabs.initialise(contentElement, activeElement);

            assert.equal(contentElement.className, "hidden");
            assert.equal(activeElement.className, "active");

            tearDown(contentElement, activeElement);
        });

        it("Switch tabs should change active tab and hidden content", function() {
            var hiddenContent = createElement("div");
            var activeTab = createElement("a");

            tabs.initialise(hiddenContent, activeTab);

            var contentElementTab2 = createElement("div");
            var activeElementTab2 = createElement("a");

            tabs.swap(hiddenContent, activeTab, contentElementTab2, activeElementTab2);

            assert.equal(hiddenContent.className, "");
            assert.equal(activeTab.className, "");
            assert.equal(contentElementTab2.className, "hidden");
            assert.equal(activeElementTab2.className, "active");

            tearDown([hiddenContent, activeTab, contentElementTab2, activeElementTab2]);
        });


        it("Apply class to element with no existing class", function(){
            var element = createElement("div");

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "hidden");

            element.parentNode.removeChild(element);
        });

        it("Apply class to element with existing class", function(){
            var element = createElement("div");
            element.className = "existing";

            tabs.addClass(element, "hidden");

            assert.equal(element.className, "existing hidden");

            element.parentNode.removeChild(element);
        });

        it("Remove class from an element with no existing class", function() {
           var element = createElement("div");

           tabs.removeClass(element, "hidden");

            assert.equal(element.className, "");

            element.parentNode.removeChild(element);
        });

        it("Remove class from an element with existing class", function() {
            var element = createElement("div");
            element.classList.add("existing");
            element.classList.add("hidden");

            tabs.removeClass(element, "hidden");

            assert.equal(element.className, "existing");

            element.parentNode.removeChild(element);

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