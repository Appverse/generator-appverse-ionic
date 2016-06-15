'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');
var fse = require('fs-extra');

var config = require('../generators/app/config/project-config');

describe('appverse-ionic:app', function () {
    describe('when creating plain app', function () {
        before(function (done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .inTmpDir(function (dir) {
                    var done = this.async();
                    // `dir` is the path to the new temporary directory
                    fse.copy(path.join(__dirname, '../generators/app/templates'), dir,
                                {filter: function(elem) {
                                        for (var i = 0; i<config.demotemplates.length; i++){
                                            if (elem.indexOf(config.demotemplates[i])>-1) {
                                                return false;
                                            }
                                        }
                                        for (var i = 0; i<config.demofiles.length; i++){
                                            if (elem.indexOf(config.demofiles[i])>-1) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    }
                                }, done);
                })
                .withPrompts({
                    appName: 'test',
                    username: 'username',
                    password: 'password',
                    email: 'email@email.org'
                })
                .withOptions({
                    'skip-install': true,
                    'skip-welcome-message': true
                }) // execute with options
                .on('end', done);
        });

        it('should move files', function (done) {
            assert.file(config.files);
            done();
        });
        it('should create templates', function (done) {
            assert.file(config.templates);
            done();
        });
        it('should not move demo files', function (done) {
            assert.noFile(config.demofiles);
            done();
        });
        it('should not create demo templates', function (done) {
            assert.noFile(config.demotemplates);
            done();
        });
        it('should add appName to files', function() {
            assert.fileContent([
                [ 'bower.json', '\"name\": \"test\"' ],
                [ 'package.json', '\"name\": \"test\"' ],
                [ 'app/index.html', 'ng-app="testApp">' ],
                [ 'app/app.js', 'angular.module(\'testApp\', [' ]
            ]);
        });
        it('should add style placeholders to index', function () {
            assert.fileContent([
                [ 'app/index.html', '<!-- bower:css -->' ],
                [ 'app/index.html', '<!-- endbower -->' ],
                [ 'app/index.html', '<!-- include: \"type\": \"css\", \"files\": \"<%= css %>\" -->' ],
                [ 'app/index.html', '<!-- /include -->' ]
            ]);
        });
        it('should add script placeholders to index', function () {
            assert.fileContent([
                [ 'app/index.html', '<!-- bower:css -->' ],
                [ 'app/index.html', '<!-- endbower -->' ],
                [ 'app/index.html', '<!-- include: \"type\": \"js\", \"files\": \"<%= scripts %>\" -->' ],
                [ 'app/index.html', '<!-- /include -->' ]
            ]);
        });
        it('should not add new states', function () {
            assert.noFileContent([
                [ 'app/states/app-states.js', 'components/theme/theme-mobile.html' ],
                [ 'app/states/app-states.js', 'components/components/components-mobile.html' ],
                [ 'app/states/app-states.js', 'components/icons/icons-mobile.html' ],
                [ 'app/states/app-states.js', 'components/charts/charts-mobile.html' ]
            ]);
        });
        it('should add new navbar items', function () {
             assert.noFileContent([
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.theme"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.components"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.charts"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.icons"' ]
            ]);
        })
    });

    describe('when creating app with demo code', function () {
        before(function (done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .inTmpDir(function (dir) {
                    var done = this.async();
                    // `dir` is the path to the new temporary directory
                    fse.copy(path.join(__dirname, '../generators/app/templates'), dir, done);
                })
                .withPrompts({
                    appName: 'test',
                    username: 'username',
                    password: 'password',
                    email: 'email@email.org'
                })
                .withOptions({
                    'skip-install': true,
                    'skip-welcome-message': true,
                    'demo': true
                }) // execute with options
                .on('end', done);
        });

        it('should move files', function (done) {
            assert.file(config.files);
            done();
        });
        it('should create templates', function (done) {
            assert.file(config.templates);
            done();
        });
        it('should move demo files', function (done) {
            assert.file(config.demofiles);
            done();
        });
        it('should create demo templates', function (done) {
            assert.file(config.demotemplates);
            done();
        });
        it('should add appName to files', function() {
            assert.fileContent([
                [ 'bower.json', '\"name\": \"test\"' ],
                [ 'package.json', '\"name\": \"test\"' ],
                [ 'app/index.html', 'ng-app="testApp">' ],
                [ 'app/app.js', 'angular.module(\'testApp\', [' ]
            ]);
        });
        it('should add style placeholders to index', function () {
            assert.fileContent([
                [ 'app/index.html', '<!-- bower:css -->' ],
                [ 'app/index.html', '<!-- endbower -->' ],
                [ 'app/index.html', '<!-- include: \"type\": \"css\", \"files\": \"<%= css %>\" -->' ],
                [ 'app/index.html', '<!-- /include -->' ]
            ]);
        });
        it('should add script placeholders to index', function () {
            assert.fileContent([
                [ 'app/index.html', '<!-- bower:css -->' ],
                [ 'app/index.html', '<!-- endbower -->' ],
                [ 'app/index.html', '<!-- include: \"type\": \"js\", \"files\": \"<%= scripts %>\" -->' ],
                [ 'app/index.html', '<!-- /include -->' ]
            ]);
        });
        it('should add new states', function () {
            assert.fileContent([
                [ 'app/states/app-states.js', 'components/theme/theme-mobile.html' ],
                [ 'app/states/app-states.js', 'components/components/components-mobile.html' ],
                [ 'app/states/app-states.js', 'components/icons/icons-mobile.html' ],
                [ 'app/states/app-states.js', 'components/charts/charts-mobile.html' ]
            ]);
        });
        it('should add new navbar items', function () {
             assert.fileContent([
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.theme"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.components"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.charts"' ],
                [ 'app/components/menu/menu-mobile.html', 'ui-sref="app.icons"' ]
            ]);
        })
    });
});
