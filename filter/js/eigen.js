


var employees = [
    {
        name: "Ben", dateOfBirth: new Date("November 23, 1980"),
        gender: "Male", salary: 55000.788
    },
    {
        name: "Sara", dateOfBirth: new Date("May 05, 1970"),
        gender: "Female", salary: 68000
    },
    {
        name: "Mark", dateOfBirth: new Date("August 15, 1974"),
        gender: "Male", salary: 57000
    },
    {
        name: "Pam", dateOfBirth: new Date("October 27, 1979"),
        gender: "Female", salary: 53000
    },
    {
        name: "Todd", dateOfBirth: new Date("December 30, 1983"),
        gender: "Male", salary: 60000
    }
];






var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){


        $scope.employees = employees;
        $scope.rowCount = 3;


    });






//TODO: next video - lesson 7:    https://www.youtube.com/watch?v=8bf5aZSWp9A&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=7