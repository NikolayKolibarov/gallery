(() => {
    angular.module('gallery')
        .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../dist/views/home.html',
                    controller: 'Pictures',
                    controllerAs: 'pictures'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '../dist/views/about.html'
                })
                .state('picture-details', {
                    url: '/pictures/:id',
                    templateUrl: '../dist/views/picture-details.html',
                    controller: 'PictureDetails',
                    controllerAs: 'pictureDetails'
                })
                .state('picture-create', {
                    url: '/upload',
                    templateUrl: '../dist/views/picture-create.html',
                    controller: 'PictureCreate',
                    controllerAs: 'pictureCreate'
                })
        }]);
})();

