/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require ('mongoose'),
    Hero = require ('../models/hero');

module.exports.getHeroes = function (callbackFn) {

    Hero.find(callbackFn);
};