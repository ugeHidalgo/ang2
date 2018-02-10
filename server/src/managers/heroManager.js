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

module.exports.getHeroById = function (id, callbackFn) {

    Hero.find({username: defaultUserName, _id: id}, callbackFn);
};

module.exports.getHeroByName = function (name, callbackFn) {

    Hero.find({username: defaultUserName, name: name}, callbackFn);
};