(() => {
    angular.module('gallery').controller('Pictures', ['Picture', function (Picture) {
        let pictures = this;

        Picture.all().success((data) => {
            pictures.pictures = data;
        });

    }]);

})();