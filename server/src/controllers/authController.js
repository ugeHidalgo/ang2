/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var url = require ('url'),
    userManager = require('../managers/userManager');


/**
 * Public methods.
 */
module.exports.init = function (app) {

    // Register a new user.
    // (POST)http:localhost:3000/api/user body: {firstName: 'a name', username:'ugeHidalgo', ...}
    app.post('/api/user', function(request, response, next){

        var userToUpdate =  request.body;

        userManager.updateUser ( userToUpdate, function(error, updatedUser){
             if (error){
                response.status(400).send('Failed to save user: ' + userToUpdate.name);
            } else {
                response.set('Content-Type','application/json');
                response.status(201).send(updatedUser);
             }
        });
    });

    // Verify if an user can access
    app.post('/api/auth', function(req, res, next){

        var userData =  req.body;

        userManager.isAuthenticatedUser ( userData, function(error, loginResult){
             if (error){
                res.status(400).send(loginResult.message + loginResult.userName);
            } else {
                if (loginResult.success) {
                    res.set('Content-Type','application/json');
                    res.status(201).send(loginResult);
                }
                else {
                    res.status(401).send(loginResult.message);
                }
             }
        });
    });

    console.log('Auth controller initialized');
};