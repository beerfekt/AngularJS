


var technologies = [
    {name: 'C#', likes:0, dislikes:0},
    {name: 'ASP.NET', likes:0, dislikes:0},
    {name: 'SQL', likes:0, dislikes:0}
];


//ng-click direktive:
//  1. html: ng-repeat = "xx" liefert technology
//  2. $scope.xx = function(); nimmt technology und schreibt diese in array
//  3.aktualisierter array wert wird synchronisiert und ausgegeben


function likes(technology) {
    technology.likes++;
}

function disLikes(technology) {
    technology.dislikes++;
}




var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.technologies = technologies;

        $scope.incrementLikes = function(technology){
            likes(technology);
        };

        $scope.incrementDisLikes = function (technology) {
            disLikes(technology);
        };


    });






//TODO: next video - lesson 7:    https://www.youtube.com/watch?v=8bf5aZSWp9A&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=7