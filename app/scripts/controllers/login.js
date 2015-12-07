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

    

    $scope.login1 = function () {
      // $auth.submitLogin({
      //   email: $scope.email,
      //   password: $scope.password
      // }).then(function(response){
      //     alert('passed');
      //     $window.location.href = '/#/home'
      // }).catch(function(response){
      //     alert('failed');
      // });

      $http({
      // header: ('Access-Control-Allow-Origin: http://v1/api/locations')
      url: 'http://localhost:3000/api/auth/sign_in?email=test@ih.com&password=test1234',
      //port: 3000,
      method: 'POST'
      //data: {'login' : login}
    }).then(function(locationsData){
        $window.location.href = '/#/home'
      });

      
    };

  });
