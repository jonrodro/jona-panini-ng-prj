'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var AlbumsRsrc = require(__base + 'server/infrastructure/resources').album;

function getAlbum(id) {
    var result;
    console.log('get album by ' + id);
    try {
    	if(id){
        	result = await (AlbumsRsrc.getAlbum(id));
        } else {
        	result = await (AlbumsRsrc.getAlbums());
        }   
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function updateAlbum(album) {
    var result;
    console.log('update album by ' + album._id);
    try {
        result = await (AlbumsRsrc.updateAlbum(album));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function deleteAlbum(id) {
    var result;
    console.log('delete album by ' + id);
    try {
        result = await (AlbumsRsrc.deleteAlbum(id));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function postAlbum(album) {
    var result;
    console.log('post album');
    try {
        result = await (AlbumsRsrc.addAlbum(album));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

module.exports.getAlbum = async(getAlbum);
module.exports.updateAlbum = async(updateAlbum);
module.exports.deleteAlbum = async(deleteAlbum);
module.exports.postAlbum = async(postAlbum);