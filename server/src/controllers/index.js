/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var homeController = require ('./homeController');

module.exports.init = function (app){
    console.log('Main controller initialized');
    homeController.init(app);
};