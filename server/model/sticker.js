var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    position: { type: Number, require: true },
    name: { type: String, require: true },
    got: { type: Boolean, require: true },
    toSwap: { type: Number, require: false }
}, {
    versionKey: false
});

module.exports = mongoose.model('sticker', schema);
