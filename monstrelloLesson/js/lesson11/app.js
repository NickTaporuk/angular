/**
 *
 * **/
var app = angular.module('app',[]);

app.directive('fooBar',[function(){
    return {
        restrict:"E",
        link:function(){
            console.log('this is directive');
        }
    }
}]);