'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getAlbums(request, response) {
    console.log('GET album',request.params.id);
    var result;
    try {
        result = await (service.albumsService.getAlbum(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteAlbums(request, response) {
    console.log('DELETE album');
    var result;
    try {
        result = await (service.albumsService.deleteAlbum(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateAlbums(request, response) {
    console.log('UPDATE album');
    var result;
    try {
        result = await (service.albumsService.updateAlbum(request.body.album));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postAlbums(request, response) {
    console.log('POST album');
    var result;
    try {
        result = await (service.albumsService.postAlbum(request.body.album));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getAlbums));
routes.get('/', async(getAlbums));
routes.delete('/:id', async(deleteAlbums));
routes.put('/:id', async(updateAlbums));
routes.post('/', async(postAlbums));

module.exports = routes;