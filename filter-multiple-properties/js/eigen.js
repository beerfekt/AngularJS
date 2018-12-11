


var employees = [
    {
        name: "Ben",   gender: "Male", city: 'München'
    },
    {
        name: "Sara",  gender: "Female", city: 'Königreich Starnberg'
    },
    {
        name: "Mark",  gender: "Male", city: 'Zweibrücken'
    },
    {
        name: "Pam",  gender: "Female", city: 'Belfast'
    },
    {
        name: "Todd", dateOfBirth: new Date("December 30, 1983"),
        gender: "Male", city: 'London'
    }
];



var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.employees = employees;
    });



