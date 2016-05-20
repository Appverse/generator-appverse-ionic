//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('<%=appName%>App')
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
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
                ;

                $ionicConfigProvider.scrolling.jsScrolling(false);
            }]);
