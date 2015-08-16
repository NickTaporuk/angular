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
    var usersUrl = 'http://phalcon.dev/api/users/';
    return {
        getUsers:function(id){
            var url = usersUrl+id,
            user = $http.get(url).
                then(function (response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //console.log('response:', angular.fromJson(response));
                    if (response) {
                        return angular.fromJson(response);
                    } else {
                        return {};
                    }
                }, function (response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    //console.log('response-error:', response);
                    return {"status":false};
                });
            console.log('url:', url);

            return user;
        },
        getAllUsers:function(){
            var users = $http.get(usersUrl).
                then(function (response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //console.log('response:', angular.fromJson(response));
                    if (response) {
                        return angular.fromJson(response);
                    } else {
                        return {};
                    }
                }, function (response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    //console.log('response-error:', response);
                    return {"status":false};
                });
            console.log('usersUrl:', usersUrl);

            return users;

            return users;
        }

};

}]);


rest.controller('usersCtrl',['$scope','DataShare','LoggingService','$http',function($scope,sharedData,logger,$http){

    logger.log(angular.fromJson(sharedData.getUsers(1)),'logger->data->user:');

    $scope.users = {};

    sharedData.getUsers(1).then(function(promise) {
        $scope.users = promise;
    });

    sharedData.getAllUsers().then(function(promise) {
        $scope.users.all = promise;
    });
    logger.log($scope.users.all,'$scope.users.all');
}]);