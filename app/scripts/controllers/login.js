'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('LoginCtrl', function ($scope,$window,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      //'ng-token-auth'
    ];    

    $scope.doLogin = function (email,password) {
      $http({
      url: 'http://localhost:3000/api/auth/sign_in?email='+email+'&password='+password,
      method: 'POST'
    }).success(function(locationsData,status,headers,config){
        $window.location.href = '/#/home'
        $window.accessToken=headers('access-token')
        $window.client=headers('client')
        $window.uid=headers('uid')
      }).error(function () {
        alert('Unauthorized user');
      });      
    };

  });
