'use strict';

//module

angular
    .module('myApp', ['ui.router'])
    .config(config);


//Configuration of module
/** @ngInject */
function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home.html');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/index.html',
            controller: 'HomeController as vm'
        })
        .state('courses', {
            url: '/courses',
            templateUrl: 'courses/index.html',
            controller:'CoursesController as vm'
        })
};


