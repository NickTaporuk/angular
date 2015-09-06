angular.module('app').controller('listCtrl',['listsFactory',function(listsFactory){
    console.log('listCtrl::');
    this.removeList = function(list){
    listsFactory.removeList = function(list){

        };
    }
}]);