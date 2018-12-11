



//MODULE
    //A module is a container for different parts of your application
    // module ist vergleichbar mit der main function in anderen Programmen






//MODELL

//'object'

var angestellter = {
    vorname : 'hans',
    nachname : 'wurst',
    geschlecht: 'männlich'
};




//CONTROLLER


// definieren eines Moduls
var myModul = angular.module("meinModul", []);



// definieren eines Controllers:
var myController = function ($scope) {
    $scope.message = "Pfosten ";
    //hinzufügen des angestellten
    $scope.angestellter = angestellter;
}

// hinzufügen eines Controllers zum Modul
myModul.controller("meinController",myController );





//kann auch via method chaining realisiert werden,
// aber ist alles zusammengestopft



//VIEW

// ---> ***.html
// {{  }}