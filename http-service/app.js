'use strict';

angular
    .module('myApp', ['ui.router'])
    .config(config);

/** @ngInject */
function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home.html');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/index.html',
            controller: 'HomeController as vm'
        })
        .state('people', {
            url: '/people',
            templateUrl: 'people/index.html',
            controller:'PeopleController as vm'
        })
};


