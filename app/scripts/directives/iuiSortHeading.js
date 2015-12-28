(function (prqapp) {
  'use strict';

  prqapp.directive('iuiSortHeading', [function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        iuiSortKey: '@',
        iuiSortBy: '=',
        iuiReverse: '='
      },
      templateUrl: urlDetails[0] + "//" + urlDetails[2] + '/prqstatic/Templates/iuiSortHeading.html'
    };
  }]);
}(window.prqapp));
