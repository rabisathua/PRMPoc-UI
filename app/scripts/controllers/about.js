'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('AboutCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://localhost:3000/api/v1/locations').success(
      function(locationsData){
        $scope.Regions=locationsData;
      });
// $http.get({
//      url:"http://localhost:3000/v1/api/locations",
//      dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
//      success:function(json){
//          // do stuff with json (in this case an array)
//          alert("Success");
//      },
//      error:function(){
//          alert("Error");
//      }      
// });
    

    $scope.physicianSearchData = [];
    // $scope.Regions = [{city: 'Bangalore'},{city:'Mumbai'},{city:'Pune'},{city:'Delhi'},{city:'Chennai'}];
    $scope.Speciality = [{disease: 'Allergy'},{disease:'ENT'},{disease:'Heart'}];
    $scope.AssignedPhysician = [{physician: 'Bhavin'},{physician:'Gunjan'},{physician:'Rabi'}];
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };
    $scope.physicianSearchData.push($scope.regionLocation);
    // $scope.regionChange = function (data) {
    // 	// body...
    // 	$scope.physicianSearchData.push($scope.Regions);
    // }

    // $scope.searchPhysician = function (physicianSearchData) {
    // 	// body...
    // 	// $http.post(){
    // 	// 	rerturn
    // 	// }
    // }
  });
