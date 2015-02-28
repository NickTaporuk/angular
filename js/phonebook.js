/**
 * Created by nick on 28.02.15.
 */
var app = angular.module('phonebook', []);

app.controller('PhoneBookController',['$scope','DataService', function (scope,DataService) {
    scope.persons = DataService.list();
    scope.view = 'list';
}]);

app.directive('pbPersonCar', ['$window',function (win) {
    return {
        templateUrl:'partials/persons-car.html',
        restrict:'AE',
        scope:{
            person :'='
        }
    };
}]);
app.service('DataService', [function () {
    function list(){
        return [
            {
                "name":"Nick",
                "surname":"Taporuk",
                "company":"The Best Company",
                "phone":"+380979720325"
            },
            {
                "name":"Amg",
                "surname":"Mersedes",
                "company":"Mersedes",
                "phone":"Mersedes"
            },
            {
                "name":"SLC",
                "surname":"Mersedes",
                "company":"Mersedes",
                "phone":"Mersedes"
            },
            {
                "name":"QuatroPorte",
                "surname":"Masseraty",
                "company":"Masseraty",
                "phone":"Masseraty"
            },
            {
                "name":"M3",
                "surname":"BMW",
                "company":"BMW",
                "phone":"BMW"
            },
            {
                "name":"M5",
                "surname":"BMW",
                "company":"BMW",
                "phone":"BMW"
            },
            {
                "name":"M7",
                "surname":"BMW",
                "company":"BMW",
                "phone":"BMW"
            }
        ];
    }
    return {
        list:list
    };
}]);