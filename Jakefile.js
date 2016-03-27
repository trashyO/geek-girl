(function() {
    "use strict";

    desc("Default build.");
    task("default", function(){
       console.log("Hello, I'm the default task");
    });

    desc("Run unit tests");
    task("unit-tests", function(){
        console.log("Placeholder for unit tests.")
    });

    desc("Run integration tests");
    task("integration-tests", function() {
        console.log("Placeholder for integration tests.")
    });

    desc("Run acceptance tests");
    task("acceptance-tests", function(){
        console.log("Placeholder for acceptance tests.")
    });

    console.log("\n\nBUILD OK");
}());