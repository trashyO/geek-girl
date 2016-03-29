// Created by Tracey Oliver on 12/12/2015
/* globals jake:false, desc:false, task:false, fail: alse, complete:false  */

(function() {
    "use strict";

    let packageJson = require("./package.json");
    let semver = require("semver");
    let jshint = require("simplebuild-jshint");
    let karma = require("simplebuild-karma");

    const EXPECTED_NODE_VERSION = packageJson.engines.node;

    //******* Global Tasks *******
    desc("Start Karma");
    task("karma", function() {
        console.log("Starting karma: ");
        karma.start({configFile: "karma.conf.js"}, complete, fail);
    }, {async: true});

    desc("Default build.");
    task("default", ["check-version", "lint", "unit-tests"], function(){
       console.log("Running default: ");
        console.log("\n\nBUILD OK");
    });

    desc("Run http server");
    task("run", function(){
        console.log("Running http-server: ");
        jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
    });

    //******* Local Tasks *******
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
            options: lintOptions(),
            globals: {desc, task
            }
        }, complete, fail);
    }, {async: true});


    desc("Run unit tests");
    task("unit-tests", function(){
        console.log("Running unit tests: ");
        karma.run({configFile: "karma.conf.js", expectedBrowsers: ["Chrome 48.0.2564 (Mac OS X 10.10.4)"]}, complete, fail);
    }, {async: true});

    desc("Run integration tests");
    task("integration-tests", function() {
        console.log("Placeholder for integration tests.");
    });

    desc("Run acceptance tests");
    task("acceptance-tests", function(){
        console.log("Placeholder for acceptance tests.");
    });

    function lintOptions() {
        return {
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
            esversion: 6,
            browser: true,
            noarg: true
        };
    }
}());