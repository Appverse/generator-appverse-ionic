//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('<%=appName%>App')
    .config(
        ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
            function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider.otherwise('/app/home');
                               
                $stateProvider                
               .state('app', {
                 url: '/app',
                 abstract: true,
                 controller: 'MenuController',
                 templateUrl: 'components/menu/menu-mobile.html' 
                 }) 
                  .state('app.home', {
                        // Use a url of '/' to set a states as the 'index'.
                        url: '/home',
                        controller: 'HomeController',
                        templateUrl: 'components/home/home-mobile.html' 
                    })
                .state('app.theme', {
                        // Use a url of '/' to set a states as the 'index'.
                        url: '/theme',
                        controller: 'ThemeController',
                        templateUrl: 'components/theme/theme-mobile.html' 
                    })
                    .state('app.components', {
                        // Use a url of '/' to set a states as the 'index'.
                        url: '/components',
                        controller: 'ComponentsController',
                        templateUrl: 'components/components/components-mobile.html' 
                    })
                     .state('app.icons', {
                        // Use a url of '/' to set a states as the 'index'.
                        url: '/icons',
                        controller: 'IconsController',
                        templateUrl: 'components/icons/icons-mobile.html' 
                    })
                      .state('app.charts', {
                        // Use a url of '/' to set a states as the 'index'.
                        url: '/charts',
                        controller: 'ChartsController',
                        templateUrl: 'components/charts/charts-mobile.html' 
                    })
                ;
                $ionicConfigProvider.scrolling.jsScrolling(false);
            }]);
