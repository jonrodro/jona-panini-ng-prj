var async = require('asyncawait/async');
var await = require('asyncawait/await');
var albumModel = require(__base + 'server/model/album');

function getAlbums() {
    var mysort = { year: -1 };
    var albums = await(albumModel.find({}).sort(mysort));
    return albums;
}

function getAlbum(id) {
    var album = await(albumModel.findOne({_id:id}));
    return album;
}

function deleteAlbum(id) {
    var album = await(albumModel.remove({_id:id}));
    return album;
}

function updateAlbum(albumParam) {
    var album = await(albumModel.update({_id:albumParam._id},albumParam));
    return album;
}

function addAlbum(albumParam) {
    var album = await(albumModel.create(albumParam));
    return album;
}

module.exports = {
    getAlbums: async(getAlbums),
    getAlbum: async(getAlbum),
    deleteAlbum: async(deleteAlbum),
    updateAlbum: async(updateAlbum),
    addAlbum: async(addAlbum)
};