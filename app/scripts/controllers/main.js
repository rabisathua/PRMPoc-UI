'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('MainCtrl', function ($scope,$window,$rootScope,store) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var profile=store.get("profile");
    $scope.username=profile.name;
    $scope.populateSpeciality = function(selected_items)
    {
        $window.appIds = selected_items;
        $rootScope.$broadcast("LoadSpecialities");
    }


  });
