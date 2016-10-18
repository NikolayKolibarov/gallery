let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    pictureSchema = new Schema({
        id: Schema.ObjectId,
        title: String,
        path: String,
        date: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model('Picture', pictureSchema);