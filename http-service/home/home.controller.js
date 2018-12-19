'use strict';

angular
    .module('myApp')
    .controller('HomeController', HomeController);

/** @ngInject */
function HomeController($state){
    var vm = this;

    vm.goToPeople=goToPeople;

    console.log($state);

    //Go to courses
    function goToPeople(){

        $state.go('people');
    }

};