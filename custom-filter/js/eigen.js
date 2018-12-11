


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
    .filter( 'gender', function() {
        return function (gender){
            switch (gender) {
                case 1 :
                    return 'male';
                case 2 :
                    return 'female';
                case 3 :
                    return 'unknown';
            }
        }
    })
    .controller('meinController', function($scope){
        $scope.employees = employees;



    });
