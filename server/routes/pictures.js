let express = require('express');
let router = express.Router();
let picturesController = require('../controllers/picturesController');

router.get('/', (req, res) => {
    picturesController.getAllPictures(req, res);
});

router.get('/:id', (req, res, id) => {
    picturesController.getPicture(req, res);
});

router.post('/create', (req, res) => {
    picturesController.createPicture(req, res);
});

router.get('/download/:id', (req, res) => {
    picturesController.downloadPicture(req, res );
});

module.exports = router;