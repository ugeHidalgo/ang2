/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var homeController = require ('./homeController'),
    heroController = require ('./heroController');

module.exports.init = function (app){
    console.log('Main controller initialized');
    homeController.init(app);
    heroController.init(app);
    
};