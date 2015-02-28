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

//app.controller('MainController',['$scope','LogService','AlertService',
app.controller('MainController',['$scope','AlertService',
    function($scope,logger,alert){
        $scope.name = 'Guest';

        $scope.Funct = function(){
            logger.log('Hello')
        }
    }
]);


