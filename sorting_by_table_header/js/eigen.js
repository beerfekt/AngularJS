//http://csharp-video-tutorials.blogspot.com/2015/11/angularjs-sort-rows-by-table-header.html


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
        //Native MEthoden ------------
        $scope.sortColumn = "name"; //Initialer Pfeil, hier beginnt es mit spalte "name"
        $scope.reverseSort = false;
        //----------------------------

        //Daten sortieren: sortierende spalte setzen:
        $scope.sortData = function (column) {
            //Wenn column = name
            $scope.reverseSort = ($scope.sortColumn == column) ?
                //invertiere sortierfunktion
                !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        //pfeil hoch/runter anhängen:
        $scope.getSortClass = function (column) {
            // wenn die gewählte classe aktiv ist....
            if ($scope.sortColumn == column) {
                //wird diese invertiert (arrow down)
                return $scope.reverseSort ? 'arrow-down': 'arrow-up';
            }

            return '';
        }










    });






//TODO: next video - lesson 7:    https://www.youtube.com/watch?v=8bf5aZSWp9A&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=7