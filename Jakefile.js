(function() {
    "use strict";

    let packageJson = require("./package.json");
    let semver = require("semver");
    let jshint = require("simplebuild-jshint");

    const EXPECTED_NODE_VERSION = packageJson.engines.node;

    //******* Global Tasks *******
    desc("Default build.");
    task("default", ["check-version", "lint"], function(){
       console.log("Hello, I'm the default task");
        console.log("\n\nBUILD OK");
    });

    desc("Check external dependency versions");
    task("check-version", function() {
        console.log("Checking node version: .");
        let actualNodeVersion = process.version;

        if(semver.neq(actualNodeVersion, EXPECTED_NODE_VERSION)) {
            fail(`Incorrect version of node. Expected: ${EXPECTED_NODE_VERSION} Actual: ${actualNodeVersion}`);
        }
    });

    desc("Linting javascript");
    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");

        jshint.checkFiles({
            files: ["Jakefile.js", "src/**/*.js"],
            options: {  esnext: true,
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                futurehostile: true,
                latedef: "nofunc",
                maxcomplexity: 5,
                maxdepth: 2,
                maxparams: 4,
                nocomma: true,
                nonew: true,
                quotmark: "double",
                strict: true,
                undef: true,
                node: true,
                browser: true,
                noarg: true},
            globals: {
            }
        }, complete, fail);
    }, {async: true});


    desc("Run unit tests");
    task("unit-tests", function(){
        console.log("Placeholder for unit tests.");
    });

    desc("Run integration tests");
    task("integration-tests", function() {
        console.log("Placeholder for integration tests.");
    });

    desc("Run acceptance tests");
    task("acceptance-tests", function(){
        console.log("Placeholder for acceptance tests.");
    });
}());