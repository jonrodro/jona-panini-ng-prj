var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    shortName: { type: String, require: true },
    longName: { type: String, require: true },
    active: { type: Boolean, require: true },
    year: { type: Number, require: false },
    minPosition: { type: Number, require: true },
    maxPosition: { type: Number, require: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('album', schema);
