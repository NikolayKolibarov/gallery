const port = 3333;

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    favicon = require('serve-favicon'),
    mongoose = require('mongoose'),
    expressFileupload = require('express-fileupload');

let pictures = require('./routes/pictures');

let db = 'mongodb://localhost/gallery';
mongoose.connect(db);

app.use(express.static(path.join(__dirname + '/../client')));
app.use(favicon(path.join(__dirname + '/../client/favicon.ico')));
app.use('/bower_components', express.static(path.join(__dirname + '/../bower_components')));
app.use('/node_modules', express.static(path.join(__dirname + "/../node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressFileupload());

app.get('/', (req, res) => {
    res.send('home');
});

app.use('/api/pictures', pictures);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});