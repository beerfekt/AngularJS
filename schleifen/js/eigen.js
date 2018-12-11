//ng-repeat direktive:

var belegschaft = [
    {vorname : 'hans', nachname: 'wurst'},
    {vorname : 'meier', nachname: 'voll'},
    {vorname : 'herr', nachname: 'vorragend'}
];


var countries = [
    {
        name : 'uk',
        cities: [
            {    'name': 'birmingham'},
            {    'name': 'london'    },
        ]
    },
    {
        name   : 'de',
        cities :  [
            {    'name': 'münchen'},
            {    'name': 'zweibrücken'   },
        ]

    },
];


var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.belegschaft = belegschaft;
        $scope.countries = countries;
    });



//TODO: next video - lesson 7:    https://www.youtube.com/watch?v=8bf5aZSWp9A&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=7