/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require ('mongoose'),
    User = require ('../models/user');

module.exports.isAuthenticatedUser = function( userData, callbackFn) {

    this.getUserByExactUserName(userData.userName, function (err, user) {

        if (err) { return callbackFn(err); }
        if (!user || user.length === 0) { return callbackFn(null, false); }
            
        if (userData.password !== user[0].password) {
                return callbackFn (null, false);
        }
        return callbackFn (null, true);
    });
}

module.exports.getUserById = function (id, callbackFn) {

    User.find({_id: id}, callbackFn);
};

module.exports.getUserByExactUserName = function (userName, callbackFn) {

    User.find({username: userName}, callbackFn);
};

module.exports.getUserByUserName = function (userName, callbackFn) {

    var regexString = `/${userName}/`;
    User.find({username: new RegExp(userName, 'i')}, callbackFn);
};

module.exports.updateUser = function (user, callbackFn) {

    var updatedValues = {};

    if (user._id) {
        //Update existing user.
        updatedValues = {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
        };
 
         User.findOneAndUpdate(
            {_id: user._id}, 
            { $set: updatedValues },
            function (error){
                if (error){
                    callbackFn(error, null);
                } else {
                    console.log ('User data updated -->username = ' + user.username + ' /id = ' + user._id);                        
                    callbackFn(null, user)
                }
            }); 
    } else {
        //Create new user.
        var newUser = new User(user);

        newUser.save(function (error) {
            if (error) {
                callbackFn(error, null);
            } else {
                console.log ('New user saved ----->username = ' + newUser.username + ' /id = ' + newUser._id);
                callbackFn(null, newUser);
            }
        });
    } 
};