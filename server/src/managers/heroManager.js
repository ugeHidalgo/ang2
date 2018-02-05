/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var defaultUserName = 'ugehidalgo',
    mongoose = require ('mongoose'),
    Hero = require ('../models/hero');

module.exports.getHeroes = function (callbackFn) {

    Hero.find({username: defaultUserName}, callbackFn);
};