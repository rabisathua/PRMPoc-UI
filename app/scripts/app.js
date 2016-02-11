'use strict';

/**
 * @ngdoc overview
 * @name prmUiApp
 * @description
 * # prmUiApp
 *
 * Main module of the application.
 */
angular.module('prmUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'auth0',
    'angular-storage', 'angular-jwt'
    //'ng-token-auth'
  ])
  .config(function($routeProvider,authProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: '/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        //controller: 'HomeCtrl',
        controllerAs: 'home',
        requiresLogin: true
      })
      .when('/searchPhysician', {
        templateUrl: 'views/searchPhysician.html',
        controller: 'SearchPhysicianCtrl',
        controllerAs: 'searchPhysician'
      })
      .otherwise({
        redirectTo: '/'
      });

    authProvider.init({
      domain: 'predqa.auth0.com',
      clientID: 'JqOYVMqEK73bhd22fAn1NrtYPChQrXoA'
      //clientSecret: 'AV9331Ikh7Jmaw19b8v8ircZd1YPRX4WG7YT7pH17sgD3loYryfolZagfDr04wB2'
  });
})
  .run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});

// angular
//   .module('prmUiApp')
//   .run(function ($http,$window) {
//     $http.defaults.headers.common = {'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid};
//   });
