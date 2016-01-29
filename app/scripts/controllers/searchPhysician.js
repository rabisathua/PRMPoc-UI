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
      GetClientDetails();
      $scope.Clients = $rootScope.Clients;
      $scope.selected_items = [];
       $scope.init=function init(){
        searchPhysicianFactory.getLocations().then(
        function(locationsData){
              $scope.Regions=locationsData;
           });
            
        GetSpecialities();
        GetAssignedTo();
      }
      $scope.init();
    

      function GetSpecialities()
      {
         searchPhysicianFactory.getSpecialities().then(
          function(specialitiesData){
            $scope.specialities=specialitiesData;
          });
      };

      function GetAssignedTo () {
        searchPhysicianFactory.getAssignedTo().then(
          function(assignedToData){
            $scope.assignedTo=assignedToData;
          });
      };

      $scope.search = function (locationId,specialityId,physicianType,liasonAssignedToId){

        searchPhysicianFactory.getPhysicians(locationId,specialityId,physicianType,liasonAssignedToId).then(
        function(physiciansData){
          $scope.physicians = physiciansData;
          loadUIGrid($scope.gridColumns, physiciansData);
          $scope.showGrid = true;
        })
        .catch(function () {
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

      $scope.populateSpeciality = function(selected_items)
    {
        $window.appIds = selected_items;
       // $rootScope.$broadcast("LoadSpecialities");
       GetSpecialities();
    }

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
