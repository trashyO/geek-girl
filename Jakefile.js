(function() {
    "use strict";

    let packageJson = require("./package.json");
    //const EXPECTED_NODE_VERSION = packageJson.engines.node;
    const EXPECTED_NODE_VERSION = "v4.2.3";

    desc("Default build.");
    task("default", function(){
       console.log("Hello, I'm the default task");
        console.log("\n\nBUILD OK");
    });

    //******* Local Tasks *******
    desc("Check external dependency versions");
    task("check-version", function() {
        console.log("Checking node version: .");
        let actualNodeVersion = process.version;

        if(actualNodeVersion !== EXPECTED_NODE_VERSION) {
            fail(`Incorrect version of node. Expected: ${EXPECTED_NODE_VERSION} Actual: ${actualNodeVersion}`);
        }
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
}());