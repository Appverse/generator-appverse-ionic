'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');
var fse = require('fs-extra');

var config = require('../generators/app/config/project-config');

describe('appverse-ionic:app', function () {
  before(function (done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .inTmpDir(function (dir) {
                    // `dir` is the path to the new temporary directory 
                    var done = this.async(); 
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
                    'skip-welcome-message': true
                }) // execute with options
                .on('end', done);
        });

        it('should create files', function (done) {
             assert.file(config.files);
            done();
        });
});
