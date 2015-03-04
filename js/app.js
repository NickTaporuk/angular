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
    .factory('menuFactory',['$http','$q',function($http,$q) {
        var menuUrl             = 'json/products.json',
            menu                = null,
            currentItem         = null,
            currentItemStatus   = 'new',//new OR edit
            currentItemAmount   = 1,
            currency            = '';

        return {
            getMenu:function(){
                var deferred = $q.defer();
                $http({method:'GET',url:menuUrl})
                    .success(function(data){
                        console.log(data);
                        menu = data;
                        currency = data.currency;
                        deferred.resolve(data);
                    })
                    .error(function(data,status,headers,config){
                        deferred.reject('Error in $http request');
                        console.log('data:',data);
                        console.log('status:',status);
                    });
                return deferred.promise;
            },
            setCurrency:function(){

            },
            getCurrency:function(){
                return currency;
            },
            setCurrentItem:function(item){
                currentItem = item;
                console.log('item:',item)
            },
            setCurrentItemStatus:function(status){
                currentItemStatus = status;
            },
            getCurrentItemStatus:function(){
                return currentItemStatus;
            },
            getCurrentItem:function(){
                return currentItem;
            },
            setCurrentItemAmount:function(newCurrentItemAmount){
                currentItemAmount = newCurrentItemAmount;
            },
            getCurrentItemAmount:function(){
                return currentItemAmount ;
            }
        }

    }])
    .factory('cartFactory',[function(){
        var cart = [];

        return {
            getCartCount:function(){
                return cart.length;
            },
            addItemToCart:function(item, amount,modifiers) {
                var newItem = {};
                newItem.modifiers = [];
                newItem.id = item.id;
                newItem.name = item.name;
                newItem.price = item.price;
                if( modifiers && modifiers.length > 0 ) {
                    newItem.modifiers = modifiers;
                }

                cart.push(newItem);
            },
            getCart:function(){
                return cart;
            },
            getTotal:function(){
                var total = 0;

                if(cart.length > 0) {
                    for(var i = 0;i<cart.length;i++) {
                        total+=cart[i].price * cart[i].amount;

                        if(cart[i].modifiers.length>0) {
                            for(var j =0;j < cart[i].modifiers.length;j++) {
                                total+=cart[i].modifiers[j].price * cart[i].amount;
                            }
                        }
                    }
                }
                return total.toFixed(2);
            },
            removeItem:function(item){
                var id = item.id;

                for(var i = 0;i<cart.length;i++) {
                    if( cart[i].id == id ) {
                        cart.splice(i,1);
                        return true;
                    }
                }

                return false;
            }

        }
    }])
    .controller('mainCtrl',['$scope',function($scope){

    }])
    .controller('secondCtrl',['$scope',function($scope){

    }])
    .controller('menuListCtrl',['$scope','$rootScope','menuFactory',function($scope,$rootScope,menuFactory){
        menuFactory.getMenu().then(function(menuObj){
            //console.log('menuObj:',menuObj);
            $scope.currency = menuObj.currency;
            $scope.products = menuObj.products;
        });

        $scope.openItem = function(item){
            menuFactory.setCurrentItem(item);
            menuFactory.setCurrentItemStatus('new');
            menuFactory.setCurrentItemAmount(1);

            $rootScope.$broadcast('open-item');
            $.mobile.changePage('#menuItemPage',{transition:'slideUp'});
        }
    }]);