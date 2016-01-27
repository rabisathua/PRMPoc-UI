'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('LoginCtrl', function ($scope,$window,$http,clientFactory,$rootScope,auth,store,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      //'ng-token-auth'
    ];
    var urlBase = 'http://localhost:3000/api/auth/sign_in?';

    $scope.doLogin = function(email, password) {
      auth.signin({
      authParams: {
        scope: 'openid name email' // Specify the scopes you want to retrieve
      }
    },function(profile,token){
        store.set('profile', profile);
        store.set('token', token);
        GetClientDetails();
        $location.path('/home');
      }),function(error){
        console.log("There was an error",error);
      };
      // $http({
      //   url: urlBase + 'email=' + email + '&password=' + password,
      //   method: 'POST'
      // }).success(function(locationsData, status, headers, config) {
      //   $window.location.href = '/#/home'
      //   $window.accessToken=headers('access-token')
      //   $window.client=headers('client')
      //   $window.uid=headers('uid')
      //   GetClientDetails();
      // }).error(function () {
      //   alert('Unauthorized user');
      // });
    };

    function GetClientDetails() {
    clientFactory.getClients().success(
      function(clientData){
        $rootScope.Clients = clientData;
        /**$window.appIds = jQuery.map(clientData, function(n, i){
                return n.id;
        });**/
      }).error(
        function () {
          alert('Failed to load clients');
        });
    }
  });
