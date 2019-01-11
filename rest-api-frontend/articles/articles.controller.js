//TODO: AJAX erfüllt? Was macht promise von Jonas

    'use strict';

    angular
        .module('myApp')
        .controller('ArticlesController', ArticlesController);

    /** @ngInject */
    function ArticlesController($state, $scope, $http){
        var vm = this;

        vm.goHome = goHome;
        vm.showArticles = showArticles;
        vm.showArticleDetails = showArticleDetails;
        vm.addArticle = addArticle;


        //Go to home
        function goHome(){
            $state.go('home');
        }

        function showArticles(){
                $http({
                    method : "GET",
                    url : "http://rest-tutorial.test/api/articles/list"
                }).then(function mySuccess(response) {
                    $scope.articles = response.data;
                }, function myError(response) {
                    $scope.articles = [{"title":"keine Artikel vorhanden!"}];
                });

        }

        //Click Detail of Article
        function showArticleDetails($articleId){

            $http({
                method : "GET",
                url : "http://rest-tutorial.test/api/articles/list/" + $articleId
            }).then(function mySuccess(response) {
                $scope.article = response.data;
            }, function myError(response) {
                $scope.article = [{"title":"keine Artikelbeschreibung verfügbar!"},{"content":""}];
            });
        }

        //Click Detail of Article
        function addArticle($title, $content){
            // curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "new Title", "content": "new Content"}' http://rest-tutorial.test/api/articles

            console.log($title);
            console.log($content);
            //TODO: POST -formdaten abgreifen und in form bringen:
                var data = {
                    "title" : $title,
                    "content" : $content
                };
                console.log(JSON.stringify(data));


            $http({
                method : "POST",
                url : 'http://rest-tutorial.test/api/articles',
                headers: {
                    'Content-Type': 'application/json'
                },
                data : data
            }).then(function mySuccess() {
                $scope.msg = "Post Data Submitted Successfully!";
            }, function myError(response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });

            // Möglichkeit eine aktuelle Ansicht der Artikeldetails
            // showArticleDetails() (mit verzögerung, sodass Änderungen übernommen werden)


        }

    }






/*


//TOGGLE Articles -> copy this and change the list.html view

function ArticlesController($state, $scope, $http){
    var vm = this;

    //Schalter
    var visible = false;
    $scope.articleButt = 'ListArticles';

    vm.goHome = goHome;
    vm.showArticles = showArticles;
    vm.showArticleDetails = showArticleDetails;

    //Go to home
    function goHome(){
        $state.go('home');
    }

    function showArticles(){
        if(!visible) {
            $http({
                method : "GET",
                url : "http://rest-tutorial.test/api/articles/list"
            }).then(function mySuccess(response) {
                $scope.articles = response.data;
                $scope.articleButt = 'hideArticles';
            }, function myError(response) {
                $scope.articles = [{"title":"keine Artikel vorhanden!"}];
            });
            visible = true;
        } else {
            $scope.article = "";
            $scope.articles = "";
            $scope.articleButt = 'showArticles';
            visible = false;
        }
        $scope.visibility  = visible;
    }


    //Click Detail of Article
    function showArticleDetails($articleId){
        if (!visible) return ;
        let urlString = "http://rest-tutorial.test/api/articles/list/" + $articleId;
        $http({
            method : "GET",
            url : urlString
        }).then(function mySuccess(response) {
            $scope.article = response.data;
        }, function myError(response) {
            $scope.article = [{"title":"keine Artikelbeschreibung verfügbar!"},{"content":""}];
        });
    }



};
*/