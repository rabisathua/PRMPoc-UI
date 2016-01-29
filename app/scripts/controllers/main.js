'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('MainCtrl', function ($scope,$window,$rootScope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    //console.log(absUrl);
    // clientDrop();
    // function clientDrop(){
    //   var absUrl = $location.absUrl();
    //   if (absUrl == 'http://localhost:9000/#/login'){
    //     $scope.loginCheck = false;
    //   }
    //   else if(absUrl == 'http://localhost:9000/#/'){
    //     $scope.loginCheck = false;
    //   }
    //   else{
    //     $scope.loginCheck = true;
    //   }
    // }
    $scope.populateSpeciality = function(selected_items)
    {
        $window.appIds = selected_items;
        $rootScope.$broadcast("LoadSpecialities");
    }

  });
