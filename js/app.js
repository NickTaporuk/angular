/**
 * Created by nick on 28.02.15.
 */
var app = angular.module('myApp',[]);

app.factory('LogService',function(){
    return {
        log:function(arguments){
            console.log('"'+arguments+':"',arguments);
        }
    }
});

app.factory('AlertService',['$window',function($window){
    return {
        log:function(arguments){
            $window.alert('"'+arguments+':"'+arguments);
        }
    }
}]);

app.factory('sharedData',function(){
    return {
        someData:'Tests'
    }
});

//app.controller('MainController',['$scope','LogService','AlertService',
app.controller('MainController',['$scope','AlertService',
    function($scope,logger,alert){
        $scope.name = 'Guest';

        $scope.Funct = function(){
            logger.log('Hello')
        }
    }
]);

app.controller('Controller2',['$scope','sharedData', function ($scope,sharedData) {
        $scope.data = sharedData;
}]);

app.controller('Controller3',['$scope','sharedData', function ($scope,sharedData) {
        $scope.changeData = function(){
            sharedData.someData = 'DataChanged !!!'
        };
}]);
