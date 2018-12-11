


var employees = [
    {
        name: "Ben",   gender: 1, city: 'München'
    },
    {
        name: "Sara",  gender: 2, city: 'Königreich Starnberg'
    },
    {
        name: "Mark",  gender: 1, city: 'Zweibrücken'
    },
    {
        name: "Pam",  gender: 2, city: 'Belfast'
    },
    {
        name: "Todd", gender: 3, city: 'London'
    }
];






var meineApp = angular
    .module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.employees = employees;
    });
