/**
 *
 * **/
var app = angular.module('app',[]);

app.controller("mainCtrl",["$scope",function($scope){
    $scope.name = "Nick Taporuk";
}]);

app.directive('fooBar',[function(){
    return {
        restrict:"E",
        transclude:true,
        template:"<div>This is directive<ng-transclude></ng-transclude></div>",
        link:function(scope,element,attrs,ctrl,transclude){
            console.log('ctrl:',ctrl);
            transclude(scope,function(clone,scope){
                console.log('!:',clone,scope);
                element.append(clone);
            });
        }
    }
}]);

/**
 *
 * **/
app.directive("wrapIn",["$templateCache",function($templateCache) {
    return {
        restrict:"EA",
        transclude:"element",
        link:function(scope,element,attrs,ctrl,transclude){
            var template = $templateCache.get(attrs.wrapIn);//достали из кеша
            var templateElement = angular.element(template);
            transclude(scope,function(clone,scope) {
                console.log('!:',ctrl);
                element.after(templateElement.append(clone));
            });
        }
    }
}]);