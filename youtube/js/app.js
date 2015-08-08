angular.module('dep1',[]);
angular.module('YoutubeApp',['dep1']);

/*
* Logging
* */



var youtube = angular.module('YoutubeApp');
youtube.controller('LessonController',['$scope',function($scope){
    $scope.name = "Nick Taporuk"

    $scope.myFn = function(){
        console.log($scope.name);
    };
}]);
//console.info('youtube:',youtube);