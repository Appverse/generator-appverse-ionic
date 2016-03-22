'use strict';
module.exports = {
    update: {
        src: ['app/index.html'],
        options: {
            exclude: ['/lodash/',
                '/sockjs-client/',
                '/sifter/',
                '/json3/',
                '/microplugin/',
                '/placeholders/',
                '/angular-highlightjs/',               
                '/angular-dynamic-locale/',
                '/angular-translate/',
                '/angular-translate-loader-static-files/',
                '/restangular/',
                '/stomp-websocket/'
            ],
            overrides: {
                'angular-bootstrap': {
                    main: [
                        "ui-bootstrap-tpls.min.js"
                    ]
                },
                'angular': {
                    main: ['angular.min.js']
                },
                'angular-ripple': {
                    main: ['angular-ripple.js']
                },
               
                'appverse-web-html5-core': {
                    main: ['dist/appverse/appverse.min.js',
                        'dist/appverse-router/appverse-router.min.js',
                        'dist/appverse-utils/appverse-utils.min.js',
                        'dist/appverse-detection/appverse-detection.min.js', 
                        'dist/appverse-cache/appverse-cache.min.js', 
                        'dist/appverse-native/appverse-native.min.js']
                }
            }
        }
    }
};