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
          loadUIGrid($scope.gridColumns, physiciansData);
          $scope.showGrid = false;
        }).error(
        function () {
          alert('Failed to load physicians')
          $scope.showGrid = false;
        });
      };

      function loadUIGrid(gridColumn, physiciansData) {
        $scope.controllerData = {
          gridData: physiciansData,
          gridColumn: gridColumn,
          filterText: '',
          emptyDataMessage: 'No Data'
        };
      };

      $scope.$on("LoadSpecialities", function (data, event)
      {
          GetSpecialities();
      });

      $scope.gridColumns = [
            // {field: "PhysicianName", displayName: "PhysicianName"},
             {field: "first_name", displayName: "FirstName"},
             {field: "last_name", displayName: "LastName"},
             {field: "address", displayName: "Address"},
             {field: "email", displayName: "Email"},
             {field: "npi_number", displayName: "NPI"},
             {field: "department", displayName: "Department"},
             {field: "designation", displayName: "Designation"},
             {field: "qualification", displayName: "Qualification"}

      ];

  });
