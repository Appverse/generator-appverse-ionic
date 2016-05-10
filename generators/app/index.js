/*
 Copyright (c) 2012 GFT Appverse, S.L., Sociedad Unipersonal.
 This Source Code Form is subject to the terms of the Appverse Public License
 Version 2.0 (“APL v2.0”). If a copy of the APL was not distributed with this
 file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the conditions of the AppVerse Public License v2.0
 are met.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';
var path = require('path');
var fs = require('fs');
var slug = require("underscore.string");
var project = require('./config/project-config');
var appverse = require('appverse-generator-commons');
var pkg = require("../../package.json");

module.exports = appverse.extend({
    initializing: function() {
        this.conflicter.force = true;
        if (!this.options['skip-welcome-message']) {
            this.welcome(pkg);
            this.checkVersion();
        }

        if (!this.options.demo) {
            this.demo = false;
        } else {
            this.demo = this.options.demo;
        }

        if (this.options['skip-prompts']) {
            this.skipprompts = true;
        } else {
            this.skipprompts = false;
        }
    },
    prompting: function() {
        if (!this.skipprompts) {
            var done = this.async();
            var prompts = [{
                name: 'appName',
                message: 'What is your app\'s name ?  ' +
                '\n Application name cannot contain special characters or a blank space. ' +
                '\n Name will be slug if needed.  ',
                default: slug.slugify(this.appname)
            },
                {
                    type: "input",
                    name: "hostname",
                    message: "Appverse Mobile Builder Host name",
                    default: "https://builderhostname"
                }, {
                    type: "input",
                    name: "username",
                    message: "User name",
                    default: "username"
                }, {
                    type: "input",
                    name: "password",
                    message: "Password",
                    default: "password"
                }, {
                    type: "input",
                    name: "email",
                    message: "E-mail",
                    default: ""
                }
            ];

            this.prompt(prompts, function(props) {
                if (prompts.length > 0) {
                    this.appName = slug.slugify(props.appName);
                    this.username = props.username;
                    this.password = props.password;
                    this.email = props.email;
                    this.props = props;
                    this.env.options.appPath = this.options.appPath || 'app';
                    this.config.set('appPath', this.env.options.appPath);
                }
                done();
            }.bind(this));
        }
    },
    writing: function() {
        //FILES
        this.moveFiles(this.templatePath(), project.files);
        //TEMPLATES
        this.moveTemplates(this.templatePath(), project.templates);

        // handle demo files
        if (this.options.demo) {
            this.moveFiles(this.templatePath(), project.demofiles);
            this.moveTemplates(this.templatePath(), project.demotemplates);

            project.demotemplates.forEach(function(demotemplate) {
                var name = demotemplate.replace("app/components/", "");
                addRouteState(name, this);
                addMenuLink(name, this);
            }, this);
        }
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install'],
            callback: function() {
                // Emit a new event - dependencies installed
                this.emit('dependenciesInstalled');
            }.bind(this)
        });
        //Now you can bind to the dependencies installed event
        this.on('dependenciesInstalled', function() {
            this.spawnCommand('grunt', ['list']);
        });
    },
    end: function() {
        this.log("Finish.");
    }
});


/**
 * Add Routing
 * @param {string} name - rounting name
 **/
var addRouteState = function(name, self) {
    //STATES
    var hook = '$stateProvider',
        path = self.destinationPath('app/states/app-states.js'),
        file = self.fs.read(path),
        insert = ".state('app." + name + "', {url: '/" + name + "',templateUrl: 'components/" + name + "/" + name + "-mobile.html',controller: '" + slug(name).capitalize().value() + "Controller'})";

    if (file.indexOf(insert) === -1) {
        var pos = file.lastIndexOf(hook) + hook.length;
        var output = [file.slice(0, pos), insert, file.slice(pos)].join('');
        self.fs.write(path, output);
    }
};

/**
 * Add menu button
 * @param {string} name - state name
 *
 **/

 var addMenuLink = function(name, self) {
     var hook = '</ion-list>',
         path = self.destinationPath('app/components/menu/menu-mobile.html'),
         file = self.fs.read(path),
         icon = '';

     //for demo purposes
     switch (name) {
         case 'theme':
            icon = 'edit';
            break;
         case 'components':
            icon = 'social-javascript';
            break;
         case 'charts':
            icon = 'stats-bars';
            break;
         case 'icons':
            icon = 'grid';
            break;
         case 'home':
         default:
            icon = 'home';
            break;
     }

     var insert = "<ion-item menu-close ui-sref=\"app." + name + "\" ui-sref-active=\"active\" class=\"item-icon-left\" angular-ripple><i class=\"icon ion-" + icon + "\"></i><span>" + slug(name).capitalize().value() + "</span></ion-item>";

     if (file.indexOf(insert) === -1) {
        var pos = file.lastIndexOf(hook);
        var output = [file.slice(0, pos ), insert, file.slice(pos)].join('');
        self.fs.write(path, output);
    }
 };