


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






//TODO: next video - lesson 7:    https://www.youtube.com/watch?v=8bf5aZSWp9A&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=7