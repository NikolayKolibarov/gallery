(() => {
    angular.module('gallery').factory('Picture', ['$http', 'Upload', function ($http, Upload) {

        return {
            all: () => {
                return $http.get('/api/pictures');
            },
            findById: (id) => {
                return $http.get(`/api/pictures/${id}`);
            },
            create: (picture) => {
                return Upload.upload({
                    url: '/api/pictures/create',
                    data: picture
                });
            }
        };
    }]);
})();