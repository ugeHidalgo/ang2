/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require ('mongoose'),
    Hero = require ('../models/hero');

module.exports.init = function (app) {

    heroManager.getHeroes = function (callbackFn) {
        Hero.find(callbackFn);
   };

   console.log('Heroes manager initialized');
};