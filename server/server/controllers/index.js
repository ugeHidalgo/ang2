/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var homeController = require ('./homeController');

module.exports.init = function (app){
    homeController.init(app);
};