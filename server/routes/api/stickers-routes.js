'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getStickers(request, response) {
    console.log('GET sticker',request.params.id);
    var result;
    try {
        result = await (service.stickersService.getSticker(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteStickers(request, response) {
    console.log('DELETE sticker');
    var result;
    try {
        result = await (service.stickersService.deleteSticker(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateStickers(request, response) {
    console.log('UPDATE sticker');
    var result;
    try {
        result = await (service.stickersService.updateSticker(request.body.sticker));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postStickers(request, response) {
    console.log('POST sticker');
    var result;
    try {
        result = await (service.stickersService.postSticker(request.body.sticker));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getStickers));
routes.get('/', async(getStickers));
routes.delete('/:id', async(deleteStickers));
routes.put('/:id', async(updateStickers));
routes.post('/', async(postStickers));

module.exports = routes;