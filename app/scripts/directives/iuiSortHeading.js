(function (prmUiApp) {
  'use strict';

  angular.module('prmUiApp').directive('iuiSortHeading', [function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        iuiSortKey: '@',
        iuiSortBy: '=',
        iuiReverse: '='
      },
      templateUrl:'/views/directive-templates/iuiSortHeading.html'
    };
  }]);
}(window.prqapp));
