    'use strict';

    angular
        .module('myApp')
        .controller('PeopleController', PeopleController);

    /** @ngInject */
    function PeopleController($state, $scope, $http){
        var vm = this;

        vm.goHome=goHome;
        vm.getPeople = getPeople;

        //Go to home
        function goHome(){
            $state.go('home');
        }


        //Go to home
        function getPeople(){
            $http({
                method : "GET",
                url : 'http://localhost:63342/AngularJS/http-service/database.json'
            }).then(function mySuccess(response) {
                $scope.persons = response.data.records;
            }, function myError(response) {
                $scope.persons = response.statusText + 'DU PFOSSSSSTEN DAS GEHT NICHT';
            });
        }

    };