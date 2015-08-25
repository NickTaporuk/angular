// отработка передачи данных из одного контроллерп в другой
//
var app = angular.module('app',[]);

app.controller('firstCtrl',['$scope','myFactory',function($scope,myFactory){
    $scope.myFactory = myFactory;
    console.log('myFactory-->',myFactory);
    $scope.hello = 'hello world';
}]);

app.controller('secondCtrl',['$scope','myFactory',function($scope,myFactory){
    $scope.myFactory = myFactory;
    $scope.hello = 'hello world';
}]);


//для передачи данных использовать лучше фабрику
app.factory('myFactory',function(){
    return {
        hello:'Hello world'
    }
});