/**
 * Created by nick on 28.02.15.
 */
var app = angular.module('phonebook', []);

app.controller('PhoneBookController',['$scope', function (scope) {
    scope.persons = [
        {
            "name":"Nick",
            "surname":"Taporuk",
            "company":"",
            "photo":""
        },
        {
            "name":"Amg",
            "surname":"Mersedes",
            "company":"Mersedes",
            "photo":"Mersedes"
        },
        {
            "name":"SLC",
            "surname":"Mersedes",
            "company":"Mersedes",
            "photo":"Mersedes"
        },
        {
            "name":"QuatroPorte",
            "surname":"Masseraty",
            "company":"Masseraty",
            "photo":"Masseraty"
        },
        {
            "name":"M3",
            "surname":"BMW",
            "company":"BMW",
            "photo":"BMW"
        },
        {
            "name":"M5",
            "surname":"BMW",
            "company":"BMW",
            "photo":"BMW"
        },
        {
            "name":"M7",
            "surname":"BMW",
            "company":"BMW",
            "photo":"BMW"
        }
    ]
}]);