


var employees = [
    {
        name: "Ben",  gender: "Male", salary: 55000.788
    },
    {
        name: "Sara", gender: "Female", salary: 68000
    },
    {
        name: "Mark", gender: "Male", salary: 57000
    },
    {
        name: "Pam",  gender: "Female", salary: 53000
    },
    {
        name: "Todd", gender: "Male", salary: 60000
    }
];






var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.employees = employees;
    });


