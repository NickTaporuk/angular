    /**
 * Created by nick on 07.03.15.
 */
    var app = angular.module('app',[]);
    app.run(function($rootScope){
        $rootScope.name = 'Hello World'
    });
    app.controller('mainCtrl',['$scope',function($scope){

        $scope.clock ={
            now:new Date()
        };

        var updateClock = function(){
            $scope.clock = new Date();
        }

        setInterval(function(){
            $scope.$apply(updateClock);
        },1000);

        updateClock();

/*
        $scope.counter = 0;
        $scope.add = function(amount){
            $scope.counter += amount
        }

        $scope.subtract = function(amount){
            $scope.counter -= amount
        }
*/
    }]);

    /*app.controller('ParentController', function($scope) {
        $scope.person = {greeted: false};
    });
    app.controller('ChildController', function($scope) {
        $scope.sayHello = function() {
            $scope.person.name = "Ari Lerner";
            $scope.person.greeted = true;
        }
    });*/

    app.controller('MyController',
        function($scope, $parse) {
            $scope.$watch('expr', function(newVal, oldVal, scope) {
                if (newVal !== oldVal) {
                    console.log('newVal:',newVal);
                    console.log('$scope:',$scope);
// Let's set up our parseFun with the expression
                    var parseFun = $parse(newVal);
// Get the value of the parsed expression
                    $scope.parsedValue = parseFun(scope);
                }
            });

            $scope.$watch('emailBody', function(body) {
                if (body) {
                    var template = $interpolate(body);
                    $scope.previewText =
                        template({to: $scope.to});
                }
            });
        });