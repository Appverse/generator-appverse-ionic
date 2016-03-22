'use strict';

var emulator = require('./chrome-emulation');

function hasValue(obj, val) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === val) {
            return true;
        }
    }
    return false;
}

module.exports = function (grunt) {

     grunt.task.registerTask('server', 'Serves de application.', function (arg1, arg2, arg3) {
        var isOpen = hasValue(arguments, 'open');
        var isDist = hasValue(arguments, 'dist');

        if (!isDist) {
            grunt.log.writeln('Running Server');
            grunt.task.run('serve');
        } else {
            grunt.task.run('distribution');
        }
       if (isOpen) {            
          grunt.task.run('emulate:android:mobile');            
        }               
        grunt.task.run('watch');
    });

    grunt.task.registerMultiTask('emulate', 'Open chrome and set emulation mode.', function (arg1) {   
        var emulation = require('./chrome-emulation');
       var done = this.async();
       var chromeName;
        if (process.platform === 'darwin') {
            chromeName = 'google chrome';
        } else if (process.platform === 'linux') {
            chromeName = 'google-chrome';
        } else if (process.platform === 'win32') {
            chromeName = 'chrome';
        }
        var devices = this.data;
        var deviceNames = [];
        if (arg1) {
            deviceNames.push(arg1); 
        } else {
            deviceNames = Object.keys(devices);
        } 
         var platform = this.target;  
        deviceNames.forEach (function (e) { 
            var datadir = require('path').join(__dirname, '../tmp/chrome_' + platform + '_' + e);
            console.log ("Open Chrome with remote debugging port:  " + devices[e].port);
            var userdata = grunt.file.exists(datadir);
            if (!userdata) {
               require("opn")('about:blank', { app: [chromeName,'--fast-start', '--touch-events', '--no-proxy-server', '--new-window', '--disable-sync-preferences',  
            '--remote-debugging-port=' + devices[e].port,  '--use-mobile-user-agent', '--no-first-run','--disable-translate', '--disable-default-apps', '--disable-zero-browsers-open-for-tests',
            '--disable-popup-blocking' , '--no-default-browser-check', '--user-data-dir=' + datadir] });
            }   
                require("opn")('http://localhost:9000', { app: [chromeName,'--fast-start', '--touch-events', '--no-proxy-server', '--new-window', '--disable-sync-preferences',  
            '--remote-debugging-port=' + devices[e].port,  '--use-mobile-user-agent', '--no-first-run','--disable-translate', '--disable-default-apps', '--disable-zero-browsers-open-for-tests',
            '--disable-popup-blocking' , '--no-default-browser-check', '--user-data-dir=' + datadir] });  
         });
      
            done();
            
            deviceNames.forEach(function(e) {
                emulation.chrome(devices[e]);
            });
       
    }); 
    
    grunt.registerTask('serve', [
        'clean:server',
        'concurrent:server',
        'postcss:css',
        'browserSync:dev',
        'wiredep',
        'includeSource'
    ]);

    grunt.registerTask('distribution', [
        'dist',
        'browserSync:dist',
        'watch'
    ]);
};
