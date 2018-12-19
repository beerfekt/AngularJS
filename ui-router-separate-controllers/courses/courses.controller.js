    'use strict';

    angular
        .module('myApp')
        .controller('CoursesController', CoursesController);

    /** @ngInject */
    function CoursesController($state){
        var vm = this;

        vm.goHome=goHome;

        //Go to home
        function goHome(){
            $state.go('home');
        }

    };