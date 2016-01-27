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
     var currentUrl = $window.location.href.indexOf("login");
     if(currentUrl == -1)
     {
       $rootScope.showClient = true;
     }
    $scope.populateSpeciality = function(selected_items)
    {
        store.set('selectedClients', selected_items);
        $rootScope.$broadcast("LoadSpecialities");
    }


  });
