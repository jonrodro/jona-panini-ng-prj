'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var StickersRsrc = require(__base + 'server/infrastructure/resources').sticker;

function getSticker(id) {
    var result;
    console.log('get sticker by ' + id);
    try {
    	if(id){
        	result = await (StickersRsrc.getSticker(id));
        } else {
        	result = await (StickersRsrc.getStickers());
        }   
    } catch(error) {
        throw error;
    }
    return { sticker: result };
}

function updateSticker(sticker) {
    var result;
    console.log('update sticker by ' + sticker._id);
    try {
        result = await (StickersRsrc.updateSticker(sticker));
    } catch(error) {
        throw error;
    }
    return { sticker: result };
}

function deleteSticker(id) {
    var result;
    console.log('delete sticker by ' + id);
    try {
        result = await (StickersRsrc.deleteSticker(id));
    } catch(error) {
        throw error;
    }
    return { sticker: result };
}

function postSticker(sticker) {
    var result;
    console.log('post sticker');
    try {
        result = await (StickersRsrc.addSticker(sticker));
    } catch(error) {
        throw error;
    }
    return { sticker: result };
}

module.exports.getSticker = async(getSticker);
module.exports.updateSticker = async(updateSticker);
module.exports.deleteSticker = async(deleteSticker);
module.exports.postSticker = async(postSticker);