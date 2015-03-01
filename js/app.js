/**
 * Created by nick on 28.02.15.
 */
/*
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
        $scope.users = {
            name:'Nick',
            surname:"Taporuk",
            company:"Slavpeople"
        };
        $scope.john = {
            name:'John',
            surname:"Doodle",
            company:'hh'
        };

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

app.filter('decorator',function(){
    return function(input,sym,bol){
        return sym+" "+input+" "+bol;
    }
});

app.directive('ditMyDirective', ['$window',function (win) {
    return {
        restrict:"AE",
        scope:{
            user:'='
        },
        //template:"<b>{{user.name}}</b><i>{{user.surname}}</i>",
        templateUrl:"user.html",
        link:function(scope,el,attr){
            el.on('click',function(){
                win.alert(scope.user.company);
            });
        }
    }
}]);*/
var restApp = angular.module('restApp',[])
    .controller('mailCtrl',['$scope',function($scope){

    }])
    .controller('menuListCtrl',['$scope',function($scope){

    }]);