angular.module('RestApp',[]);
var rest = angular.module('RestApp');

//Logging
rest.factory('LoggingService', function(){
    return {
        log:function(argument , name){
            name = name?name:'no name';
            console.log(''+name+':',argument);
        }
    }
});

rest.factory('AlertService', ['$window',function($window){
    return {
        log:function(argument , name){
            name = name?name:'no name';
            $window.alert(name+':'+ argument);
        }
    }
}]);
//End Logging


rest.factory('DataShare',['$http',function($http) {
        var user = user || {};

        $http.post('http://phalcon.dev/api/users/4').
        then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('response:',angular.fromJson(response));
            if(response) {
                user = angular.fromJson(response);
            } else {
                user = {};
            }
        }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('response-error:',response);
            user = {};
        });

    return user;
}]);


rest.controller('usersCtrl',['$scope','DataShare','LoggingService',function($scope,sharedData,logger){

    logger.log(angular.fromJson(sharedData),'logger->data->user:');
    /*$scope.changeData = function(){
        sharedData.SomeData = 'Hello , Nick Taporuk'
    };*/
}]);