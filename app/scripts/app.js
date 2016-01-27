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
      domain: 'fire2win.auth0.com',
      clientID: 'EwNmlc9leWgspdiiwTbl51dJ5VFgAFLE'
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
