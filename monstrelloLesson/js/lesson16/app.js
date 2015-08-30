/** **/

var app = angular.module("app",[]);

app.controller('appCtrl',["$scope",function($scope){
    $scope.name = "Nick Taporuk";
    $scope.color = "#333333";

    $scope.reverse = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
}]);

app.directive("fooBar",[function(){
    return {
        scope : {
            name:"@",
            color:"=",
            reverse:"&"
        },
        template:"<div >My ctrl is name <span ng-bind='name'></span></div>"+
        "<div> My color is {{color}} <input type='text' ng-model='color'/></div>"+
        "<button class='reverse' ng-click='reverse()'>Revers</button>",
        link:function(scope,element,attrs,ctrl,transclude){
            console.log('test');
        }
    }
}]);