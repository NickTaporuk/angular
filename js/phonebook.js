/**
 * Created by nick on 28.02.15.
 */
var app = angular.module('phonebook', []);

app.controller('PhoneBookController',['$scope', function (scope) {
    scope.persons = [
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
}]);