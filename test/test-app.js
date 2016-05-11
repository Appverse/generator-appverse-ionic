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
    });
});
