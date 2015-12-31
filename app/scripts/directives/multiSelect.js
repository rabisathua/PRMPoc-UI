
angular.module('prmUiApp').directive('dropdownMultiselect', function(){
   return {
       restrict: 'E',
       scope:{           
            model: '=',
            options: '=',
            changeEvent : '&'
       },
       template: "<div class='btn-group' data-ng-class='{open: open}'>"+
        "<button class='btn btn-small'>Select</button>"+
                "<button class='btn btn-small dropdown-toggle' data-ng-click='open=!open'><span class='caret'></span></button>"+
                "<ul class='dropdown-menu' aria-labelledby='dropdownMenu'>" + 
                "<li data-ng-repeat='option in options'> <a data-ng-click='setSelectedItem()'>{{option.name}}<span data-ng-class='isChecked(option.id)'></span></a></li>" +                                        
                "</ul>" +
            "</div>" ,
       controller: function($scope){
           
           $scope.model = [];

            $scope.setSelectedItem = function(){
                var id = this.option.id;
                if($scope.model.indexOf(this.option.id)!=-1)
                {
                    $scope.model.splice($scope.model.indexOf(this.option.id),1)
                }
                else
                {
                    $scope.model.push(this.option.id);
                }
                $scope.changeEvent();
             };
            
            $scope.isChecked = function (id) {                 
                if($scope.model.indexOf(id)!=-1){
                    return 'glyphicon glyphicon-ok';
                }
            }; 
                                          
       }
   } 
});