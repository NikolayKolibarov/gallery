(() => {
    angular.module('gallery').controller('PictureCreate', ['Picture', '$state', function (Picture, $state) {
        let pictureCreate = this;

        pictureCreate.addPicture = (picture) => {
            Picture.create(picture).then((result) => {

                let errors = result.data.errors;

                if(errors) {
                    pictureCreate.errors = errors;
                } else {
                    console.log(result);
                    $state.go('home');
                }
            });
        }
    }]);
})();