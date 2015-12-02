'use strict';

/**
 * @ngdoc function
 * @name prmUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prmUiApp
 */
angular.module('prmUiApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ngGrid'
    ];

    $scope.Regions = [{city: 'Bangalore'},{city:'Mumbai'},{city:'Pune'},{city:'Delhi'},{city:'Chennai'}];
    $scope.Speciality = [{disease: 'Allergy'},{disease:'ENT'},{disease:'Heart'}];
    $scope.myData = [{name: "Moroni", age: 50},
                 {name: "Tiancum", age: 43},
                 {name: "Jacob", age: 27},
                 {name: "Nephi", age: 29},
                 {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };
  });
