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
   .config(function ($routeProvider) {
    
  //   // the following shows the default values. values passed to this method
  //   // will extend the defaults using angular.extend

  //   $authProvider.configure({
  //     apiUrl:                  'http://localhost:3000/api',
  //     tokenValidationPath:     '/auth/validate_token',
  //     signOutUrl:              '/auth/sign_out',
  //     emailRegistrationPath:   '/auth',
  //     accountUpdatePath:       '/auth',
  //     accountDeletePath:       '/auth',
  //     confirmationSuccessUrl:  window.location.href,
  //     passwordResetPath:       '/auth/password',
  //     passwordUpdatePath:      '/auth/password',
  //     passwordResetSuccessUrl: window.location.href,
  //     emailSignInPath:         '/auth/sign_in',
  //     storage:                 'cookies',
  //     forceValidateToken:      false,
  //     validateOnPageLoad:      true,
  //     proxyIf:                 function() { return false; },
  //     proxyUrl:                '/proxy',
  //     omniauthWindowType:      'sameWindow',
  //     authProviderPaths: {
  //       github:   '/auth/github',
  //       facebook: '/auth/facebook',
  //       google:   '/auth/google'
  //     },
  //     tokenFormat: {
  //       "access-token": "{{ token }}",
  //       "token-type":   "Bearer",
  //       "client":       "{{ clientId }}",
  //       "expiry":       "{{ expiry }}",
  //       "uid":          "{{ uid }}"
  //     },
  //     cookieOps: {
  //       path: "/",
  //       expires: 9999,
  //       expirationUnit: 'days',
  //       secure: false,
  //       domain: 'domain.com'
  //     },
  //     parseExpiry: function(headers) {
  //       // convert from UTC ruby (seconds) to UTC js (milliseconds)
  //       return (parseInt(headers['expiry']) * 1000) || null;
  //     },
  //     handleLoginResponse: function(response) {
  //       return response.data;
  //     },
  //     handleAccountUpdateResponse: function(response) {
  //       return response.data;
  //     },
  //     handleTokenValidationResponse: function(response) {
  //       return response.data;
  //     }
  //   });
  
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

angular
  .module('prmUiApp')
  .run(function ($http) {
    $http.defaults.headers.common.Authorization = {'access-token': "UMrTeBgmA2iNwybcdOC8HQ", 'client': "ZK-8Rf7sObHiI1eYaKLjhA", 'uid':"c9c66b97413241a6a88d1b8bfabbad48"};
  });