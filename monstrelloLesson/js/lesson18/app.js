var app = angular.module('app',[]);

app.controller('httpCtrl',["$http","$scope",function($http,$scope){
    $scope.name="Test";
    $http.get("http://localhost:3001")
        .success(function(data){
            console.log('success:',data);
        })
        .error(function(error){
            console.log('error:',error);
        });
}]);