var async = require('asyncawait/async');
var await = require('asyncawait/await');
var stickerModel = require(__base + 'server/model/sticker');

function getStickers() {
    var mysort = { position: 1 };
    var stickers = await(stickerModel.find({}).sort(mysort));
    return stickers;
}

function getSticker(id) {
    var sticker = await(stickerModel.findOne({_id:id}));
    return sticker;
}

function deleteSticker(id) {
    var sticker = await(stickerModel.remove({_id:id}));
    return sticker;
}

function updateSticker(stickerParam) {
    var sticker = await(stickerModel.update({_id:stickerParam._id},stickerParam));
    return sticker;
}

function addSticker(stickerParam) {
    var sticker = await(stickerModel.create(stickerParam));
    return sticker;
}

module.exports = {
    getStickers: async(getStickers),
    getSticker: async(getSticker),
    deleteSticker: async(deleteSticker),
    updateSticker: async(updateSticker),
    addSticker: async(addSticker)
};