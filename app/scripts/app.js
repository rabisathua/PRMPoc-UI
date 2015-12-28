'use strict';

/**
 * @ngdoc overview
 * @name prmUiApp
 * @description
 * # prmUiApp
 *
 * Main module of the application.
 */
angular
  .module('prmUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    //'ng-token-auth'
  ])
  .config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        //controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/searchPhysician', {
        templateUrl: 'views/searchPhysician.html',
        controller: 'SearchPhysicianCtrl',
        controllerAs: 'searchPhysician'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular
//   .module('prmUiApp')
//   .run(function ($http,$window) {
//     $http.defaults.headers.common = {'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid};
//   });
