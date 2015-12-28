(function (prqapp) {
  'use strict';

  prqapp.directive('iuiTable', [function () {
    return {
      restrict: 'E',
      templateUrl: urlDetails[0] + "//" + urlDetails[2] + '/prqstatic/Templates/iuiTable.html',
      scope: true,
      link: function (scope, element, attrs) {
        scope.iuiTable = {};
        scope.iuiTable.settings = {};
        scope.iuiTable.settings.defaultRowTemplate = urlDetails[0] + "//" + urlDetails[2] + '/Templates/iuiTableDefaultRow.html';
        scope.iuiTable.emptyMessage = scope.$parent.$eval(attrs.emptyDataMessage) ? scope.$parent.$eval(attrs.emptyDataMessage) : 'No records to display';
        scope.iuiTable.pagingOption = {
          currentPage: 1,
          itemsPerPage: 9
        };
        scope.iuiTable.pagingOption.currentPage = 1;

        scope.$watch(attrs.displayColumns, function (newVal) {
          scope.iuiTable.displayColumns = newVal;
        });
        scope.$watch(attrs.searchData, function (newVal) {
          scope.iuiTable.searchData = newVal;
          scope.iuiTable.rowData = newVal;
        });
        scope.$watch(attrs.tableCaption, function (newVal) {
          scope.iuiTable.tableCaption = newVal;
        });
        scope.$watch(attrs.hideTableCaption, function (newVal) {
          scope.iuiTable.hideTableCaption = newVal;
        });
        scope.$watch(attrs.hideTablePager, function (newVal) {
          scope.iuiTable.hideTablePager = newVal;
        });
        scope.$watch(attrs.rowTemplate, function (newVal) {
          scope.iuiTable.rowTemplate = newVal;
        });
        scope.$watch(attrs.tableClass, function (newVal) {
          scope.iuiTable.tableClass = newVal;
        });

        scope.$watch(attrs.filterText, function (newVal) {
          scope.filterText = newVal;
          scope.iuiTable.rowData = scope.determineSearchItems();
          scope.iuiTable.pagingOption.currentPage = 1;
        });

        scope.iuiTable.sortingOptions = scope.$parent.$eval(attrs.sortingOptions);

        scope.$watch(attrs.serverSideSorting, function (newVal) {
          scope.iuiTable.serverSideSorting = newVal;
        });

        scope.iuiTable.selectedItems = scope.$parent.$eval(attrs.selectedItems);
        // Selected items array builder
        scope.determineSelectedItems = function () {
          scope.iuiTable.selectedItems = [];
          _.each(scope.iuiTable.rowData, function (column) {
            if (column.selected === true) {
              scope.iuiTable.selectedItems.push(column);
            }
          });
        };

        scope.determineSearchItems = function () {
          var rowFound = false;
          scope.iuiTable.searchDataOutput = [];
          _.each(scope.iuiTable.searchData, function (row) {
            rowFound = false;
            _.each(scope.iuiTable.displayColumns, function (column) {
              if (row[column.field] && row[column.field] !== null) {
                if (angular.lowercase(row[column.field]).indexOf(angular.lowercase(scope.filterText) || '') !== -1) {
                  rowFound = true;
                  return;
                }
              }
            });
            if (rowFound)
            {
              scope.iuiTable.searchDataOutput.push(row);
            }
          });
          return scope.iuiTable.searchDataOutput;
        };

        // Add checkbox functionality. This function iterates through the
        // gridColumn data and finds the ng-model of column.selected and
        // assigns truth to the selectedAll object.
        scope.checkAll = function () {
          scope.selectedAll = !scope.selectedAll;
          _.filter(scope.iuiTable.rowData, function (column) {
            column.selected = scope.selectedAll;
          });
          scope.determineSelectedItems();
        };
        //  If all checkboxes are selected, then check the table header checkbox
        scope.isAllSelected = function () {
          scope.selectedAll = _.every(scope.iuiTable.rowData, function (column) {
            return column.selected;
          });
          scope.determineSelectedItems();
        };

      }
    };
  }]);
}(window.prqapp));
