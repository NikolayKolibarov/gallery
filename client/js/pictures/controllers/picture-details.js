(() => {
    angular.module('gallery').controller('PictureDetails', ['Picture', '$stateParams', function (Picture, $stateParams) {
        let pictureDetails = this;
        let pictureId = $stateParams.id;

        Picture.findById(pictureId).success((data) => {
            pictureDetails.picture = data;
        });



    }]);
})();