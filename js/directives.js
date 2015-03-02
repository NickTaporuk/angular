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
                    $scope.currency         = menuFactory.getCurrency();
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
                    scope:{},
                    templateUrl:'tmp-widgets/multipleSelectWidgets.html',
                    controller: function( $scope ) {
                        $( '#select-modifiers' ).selectmenu();
                        $scope.$on('open-item', function(event, args){
                            $scope.currentItem = menuFactory.getCurrentItem();
                            $scope.currency = menuFactory.getCurrency();
                            $scope.currentItemStatus = menuFactory.getCurrentItemStatus();
                            $timeout(function(){
                                if ( $scope.currentItemStatus == 'new' ) {
                                    $( '#select-modifiers' ).find('option').each(function(){
                                        $(this).removeAttr('selected');
                                    });
                                }

                                $( '#select-modifiers' ).selectmenu( 'refresh' );
                            }, 100);
                        });
                    }
            }
    }])

    .directive('cartPage', ['menuFactory','$rootScope',function (menuFactory,$rootScope) {
        return {
            restrict:'E',
            replace:true,
            scope:{},
            templateUrl:'tmp-pages/cartPage.html',
            controller:function($scope){
                $('#cartPage').page();
            }
        }
    }])
;
