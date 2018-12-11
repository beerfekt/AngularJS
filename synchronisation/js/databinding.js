

//Two Way Databinding means:
    // Model and View are always in sync

//here: §scope.message variable










//Großes Beispiel:

var angestellter = {
    vorname : 'hans',
    nachname: 'wurst'
};







var meineApp = angular.module('meineApp', [])
    .controller('meinController', function($scope){
        $scope.message = "Message-variable-wert!"
        $scope.angestellter = angestellter;
    });