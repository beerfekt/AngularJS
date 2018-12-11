
//MODELL

var mannschaft = {
    icon: 'images/ct.jpg',
    name : 'ct',
};




var meineApp = angular.module('meineApp', [])
                      .controller('meinController', function($scope){
                          $scope.mannschaft = mannschaft;
                      });