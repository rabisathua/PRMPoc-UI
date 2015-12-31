'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('SearchPhysicianCtrl', function ($http,$scope,searchPhysicianFactory,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'searchPhysicianFactory'
    ];

     searchPhysicianFactory.getLocations().success(
      function(locationsData){
        $scope.Regions=locationsData;
      }).error(
        function () {
          alert('Failed to load locations');
        });

     searchPhysicianFactory.getSpecialities().success(
      function(specialitiesData){
        $scope.specialities=specialitiesData;
      }).error(
        function () {
          alert('Failed to load specialities');
        });

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
