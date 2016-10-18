let mongoose = require('mongoose'),
    Picture = require('../models/Picture');

function getAllPictures(req, res) {
    Picture.find({}).exec((err, pictures) => {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }

        res.json(pictures);
    });
}

function getPicture(req, res) {
    let id = req.params.id;
    Picture.findById(id).exec((err, picture) => {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }

        res.json(picture);
    });
}

function createPicture(req, res) {
    let errors = [];

    if (!req.body.title || !req.files) {
        if (!req.body.title) {
            errors.push({message: 'The title is required.'})
        }

        if (!req.files) {
            errors.push({message: 'The image is required.'});
        }

        res.json({errors: errors});

    } else {
        let image = req.files.image;

        image.mv('client/img/uploads/' + image.name, (err) => {
            if (err) {
                console.log(err);
            }

        });

        let picture = new Picture();
        picture.title = req.body.title;
        picture.path = image.name;
        picture.save();

        res.sendStatus(201);
    }


}

function downloadPicture(req, res) {
    let id = req.params.id;

    Picture.findById(id, (err, picture) => {
        let filePath = __dirname + '/../../client/img/uploads/' +  picture.path;
        let fileName = picture.path;
        console.log(filePath);
        res.download(filePath);
    })
}

module.exports = {
    getAllPictures,
    getPicture,
    createPicture,
    downloadPicture
};