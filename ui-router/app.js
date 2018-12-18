var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home.html');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/index.html'
        })
        .state('courses', {
            url: '/courses',
            templateUrl: 'courses/index.html'
        });
}]);