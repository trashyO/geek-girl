//Created by tracey on 6/05/2016.


(function () {
    "use strict";

    var tabs = require("./tabs.js");

    document.addEventListener("DOMContentLoaded", function(){
       console.log("DOM Loaded");

        var tab1 = {contentElement: document.getElementById("content1"), tabElement: document.getElementById("tab1")};
        var tab2 = {contentElement: document.getElementById("content2"), tabElement: document.getElementById("tab2")};
        var tab3 = {contentElement: document.getElementById("content3"), tabElement: document.getElementById("tab3")};

        var tabElements = [tab1, tab2, tab3];

        tabs.initialise(tabElements);
    });
 }());
