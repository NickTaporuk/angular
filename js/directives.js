/**
 * Created by nick on 01.03.15.
 */
restApp
    .directive('menuItemPage', ['menuFactory',function(menuFactory) {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tmp-pages/menuItemPage.html',
            scope:{},
            controller:function($scope){

                $('#menuItemPage').page();

                $scope.$on('open-item',function(event,args){
                    $scope.currentItem      = menuFactory.getCurrentItem();
                    $scope.currency         = menuFactory.currency;
                    console.log($scope.currency);
                    $scope.selectedAmount   = menuFactory.getCurrentItemAmount();
                    $scope.itemStatus       = menuFactory.getCurrentItemStatus();
                });

                $scope.selectNum = function(selected){
                    $scope.selectedAmount   = selected;
                };

                $scope.activeNum = function(num){
                    return $scope.selectedAmount == num;
                }

                $scope.addItem = function(){

                };

                $scope.saveItem = function(){

                };

                $scope.removeItem = function(){

                };
            }
        }
    }])
    .directive('multipleSelectWidget',['menuFactory','$timeout',function(menuFactory,$timeout){
            return {
                    restrict:'E',
                    replace:true,
                    templateUrl:'tmp-widgets/multipleSelectWidgets.html',
                    controller:function($scope) {
                        $('#select-modifiers').selectmenu();
                        $scope.$on('open-item',function(event,args) {
                            $scope.currentItem      = menuFactory.getCurrentItem();
                            $scope.currency         = menuFactory.currency;
                            $scope.selectedAmount   = menuFactory.getCurrentItemAmount();
                            $scope.itemStatus       = menuFactory.getCurrentItemStatus();
                            $timeout(function(){
                                if($scope.itemStatus == 'new'){
                                    $('#select-modifier').find('option').each(function(){
                                        $(this).removeAttr('selected');
                                    });
                                }
                                $('#select-modifier').selectmenu('refresh');
                            },100);
                        });
                    }
            }
    }])
;