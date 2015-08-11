angular.module('dep1',[]);
angular.module('YoutubeApp',['dep1']);
var youtube = angular.module('YoutubeApp');

//Logging
youtube.factory('LoggingService', function(){
    return {
        log:function(argument , name){
            name = name?name:'no name';
            console.log(''+name+':',argument);
        }
    }
});

youtube.factory('AlertService', ['$window',function($window){
    return {
        log:function(argument , name){
            name = name?name:'no name';
            $window.alert(name+':'+ argument);
        }
    }
}]);
//End Logging

// передача данных с помощью factory obj
//из ожного контролера в другой
youtube.factory('DataShare',[function(){
    return {
        SomeData:'Test'
    };
}]);
//

//youtube.controller('LessonController',['$scope','LoggingService',function($scope, logger){
youtube.controller('LessonController',['$scope','AlertService',function($scope, logger){
    $scope.name = "Nick Taporuk";

    $scope.user = {
        name:'Nick',
        surname:'Taporuk',
        company:'ITFTC'
    };

    $scope.jonh = {
        name:'Jonh',
        surname:'Dauhn',
        company:'Genesis'
    };

    $scope.myFn = function(){
        logger.log($scope.name,'name');
    };
}]);

//
youtube.controller('ctrl1',['$scope','DataShare',function($scope,sharedData){
    $scope.data = sharedData;
}]);

youtube.controller('ctrl2',['$scope','DataShare',function($scope,sharedData){
    $scope.changeData = function(){
        sharedData.SomeData = 'Hello , Nick Taporuk'
    };
}]);

//create my filters
youtube.filter('decorator',[function(){
    return function(input,symbol){
        return symbol+''+input + ''+symbol
    }
}]);
//create directive
youtube.directive('ditMyDirective',function(){
    return {
        restrict:'AE',
        template:'Hello, Angular'
    }
});

youtube.directive('ditUserInfo',['$window',function($window){
    return {
        scope:{
            userInfo:'=user'
        },
        //поведение
        link:function(scope,element,attrs){
            element.on('click',function(){
                $window.alert(scope.userInfo.company);
            });
        },
        restrict:'AE',
        //template:'<b>{{ userInfo.name }}</b> - <b>{{ userInfo.surname }}</b>'
        templateUrl:'/youtube/partial/user.html'
    }
}]);
//end create directive
//console.info('youtube:',youtube);