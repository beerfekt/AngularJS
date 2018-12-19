'use strict';

angular
    .module('myApp')
    .controller('HomeController', HomeController);

/** @ngInject */
function HomeController($state){
    var vm = this;

    vm.goToCourses=goToCourses;

    //Go to courses
    function goToCourses(){
        $state.go('courses');
    }

};