'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('SearchPhysicianCtrl', function ($http,$scope,searchPhysicianFactory,$window,clientFactory,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'searchPhysicianFactory',
      'clientFactory'
    ];

    $scope.Clients = $rootScope.Clients;
    $scope.selected_items = [];

     searchPhysicianFactory.getLocations().success(
      function(locationsData){
            $scope.Regions=locationsData;
          }).error(
            function () {
              alert('Failed to load locations');         
        });

      GetSpecialities();

      function GetSpecialities()
      {
         searchPhysicianFactory.getSpecialities().success(
          function(specialitiesData){
            $scope.specialities=specialitiesData;
          }).error(
            function () {
              alert('No specialities loaded');          
            });
      }

      $scope.search = function (locationId,specialityId,physicianType){
            searchPhysicianFactory.getPhysicians(locationId,specialityId,physicianType).success(
            function(physiciansData){
              $scope.physicians = physiciansData;
              $scope.showGrid = true;
            }).error(
            function () {
              alert('Failed to load physicians')
              $scope.showGrid = false;
            });
      };  

      $scope.$on("LoadSpecialities", function (data, event)
      {
          GetSpecialities();
      });
   
  });
