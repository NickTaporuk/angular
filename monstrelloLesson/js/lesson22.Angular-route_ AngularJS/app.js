var app = angular.module('app',['ngRoute']);

//первое при инициализации событие
app.config(function($routeProvider){
    $routeProvider.when('/',{
        //template:'<h1>This is my home page</h1>'
        templateUrl:'/monstrelloLesson/partisions/home.html',
        controller:'routeCtrl'
    }).when('/post',{
        template:'<h1>This is my home page post</h1>',
        controller:'routeCtrl'
    }).when('/post/:postId',{
        template:'<h1>{{post.name}}</h1>',
        controller:'routeCtrl'
    }).otherwise({
        template:'<h1>404 no page </h1>'
    });
});
//событие после соnfig
app.run(function($rootScope){
    console.log('run');
    $rootScope.$on('$routeChangeStart',function(event, current, previos, reject){
        console.log('change start::',arguments);
    });
    $rootScope.$on('$routeChangeSuccess',function(event, current, previos, reject){
        console.log('change success::',arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    });

});
app.controller('routeCtrl',['$scope','$routeParams','postsFactory',function($scope,$routeParams,postsFactory){
    //console.log($scope);
    //console.log('$routeParams',$routeParams,'::PostId',$routeParams.postId);
    console.log('postsFactory::',postsFactory);
    $scope.message = "This is my beutifull message";
    $scope.posts = postsFactory;

    var postId = Number($routeParams.postId);
    $scope.post = _.findWhere(postsFactory,{id:postId});
    console.log($scope.post);
}]);


app.controller('pathCtrl',[function(){

}]);

app.factory('postsFactory',[function(){
    return [
        {
            id:1,
            name:"Why angular Js is good"
        },
        {
            id:2,
            name:"I love angular"
        }
    ]
}]);