/*jshint node:true */
'use strict';

var waitPlugin = require('./waitPlugin');
var istanbul = require('istanbul');
var collector = new istanbul.Collector();

exports.config = {
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    seleniumArgs: [
        '-browserTimeout=1000'
    ],
    specs: ['e2e/init.js', 'e2e/**/*.js'],
    allScriptsTimeout: 60000,
    getPageTimeout: 20000,
    baseUrl: 'http://127.0.0.1:9200',
    framework: 'jasmine2',
    multiCapabilities: [{
            browserName: 'phantomjs',
            'phantomjs.binary.path': require('phantomjs').path,
            'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false'],
        }
        // , {
        //    browserName: 'chrome'
        // }
        // , {
        //    browserName: 'firefox'
        // }, {
        //    browserName: 'internet explorer'
        // }
    ],
    plugins: [{
        path: './waitPlugin.js'
    }],
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        var capsPromise = browser.getCapabilities();
        var jasmineEnv = jasmine.getEnv();
        browser.driver.ignoreSynchronization = true;
        capsPromise.then(function(caps) {
            var browserName = caps.get("browserName").toUpperCase();
            var browserVersion = caps.get("version");
            var prePendStr = browserName + '-' + browserVersion + '-junit';
            jasmineEnv.addReporter(new jasmineReporters.JUnitXmlReporter({
                savePath: 'test/reports/e2e',
                filePrefix: prePendStr
            }));
            jasmineEnv.addReporter( new jasmineReporters.TerminalReporter({
                verbosity: 3,
                color: true,
                showStack: true
            }));
        });
        return capsPromise;
    },
    onComplete: function() {
        browser.driver.executeScript('return __coverage__;').then(function(coverageResults) {
            collector.add(coverageResults);
            istanbul.Report
                .create('lcov', {
                    dir: 'test/coverage/e2e'
                })
                .writeReport(collector, true);
            waitPlugin.resolve();
        });
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
