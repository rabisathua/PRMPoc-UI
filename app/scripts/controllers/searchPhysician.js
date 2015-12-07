'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('SearchPhysicianCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/locations',
      //headers: {'access-token': "UMrTeBgmA2iNwybcdOC8HQ", 'client': "ZK-8Rf7sObHiI1eYaKLjhA", 'uid':"c9c66b97413241a6a88d1b8bfabbad48"}
      }).success(
      function(locationsData){
        $scope.Regions=locationsData;
      });

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/specialities',
      //headers: {'access-token': "UMrTeBgmA2iNwybcdOC8HQ", 'client': "ZK-8Rf7sObHiI1eYaKLjhA", 'uid':"c9c66b97413241a6a88d1b8bfabbad48"}
      }).success(
      function(specialitiesData){
        $scope.specialities=specialitiesData;
      });

      $scope.search = function (id1,id2,type){
        $http({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/physicians?filters[location_id]='+id1+'&filters[speciality_id]='+id2+'&filters[by]='+type,
        //headers: {'access-token': "UMrTeBgmA2iNwybcdOC8HQ", 'client': "ZK-8Rf7sObHiI1eYaKLjhA", 'uid':"c9c66b97413241a6a88d1b8bfabbad48"}
        }).success(
        function(physiciansData){
          $scope.physicians=physiciansData;
        });

      }

  });
