


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
    })
    .controller('einController', function($scope){
        $scope.employees = employees;

        //For every item ...
        $scope.sucheEigen = function (item) {

            if( $scope.searchText == undefined){
                //if we have nothing in textbox
                // display all elements (true foreach)
                return true;
            } else {
                //if we have something in the textbox
                if ( item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                    ) {
                    //display current element
                    return true;
                }
            }
            //if nothing matches, return false and do not display the current item
            return false;

        }
    });

//2 Controller um gleichen Datensatz unabhängig zu bearbeiten, ohne dass alle Felder synchronisieren



