'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('HomeCtrl', function ($scope,$window,$http,clientFactory,$rootScope,auth,store,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      //'ng-token-auth'
    ];
    $rootScope.showClient = true;
  });
