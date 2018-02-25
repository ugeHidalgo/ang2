/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var url = require ('url');
var userManager = require('../managers/userManager');


module.exports.init = function (app) {
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

    app.get ('/api/user/:username', function (req, res, next) {
        var id = req.params.id,
            msg;

        // (GET)http:localhost:3000/api/user/ugeHidalgo
        userManager.getUserByUserName ( userName, function(error, users){
            if (error){
                console.log('User controller returns an error (400)');
                res.status(400).send(error);
            } else {
                res.set('Content-Type','application/json');
                if (users.length === 0 ) {
                    msg = `No user found with user name: ${userName}`;
                    console.log(msg);
                    res.status(200).send([msg]);
                } else {
                    console.log(`User controller returns user ${userName} successfully.`);
                    res.send(user[0]);
                }
            }
        });
    });

    app.get ('/api/user', function (req, res, next) {
        // By name: (GET)http:localhost:3000/api/user/?username=ugeHidalgo
        // By Id: (GET)http:localhost:3000/api/user/?id=5a78a8fe458a4c457a3b4969
        var queryString = url.parse(req.url, true).query,
            username = queryString.username, 
            id = queryString.id,
            msg;
        
        if (name) {
            userManager.getUserByUserName ( userName, function(error, users){
                if (error){
                    console.log('User controller returns an error (400)');
                    res.status(400).send(error);
                } else {
                    res.set('Content-Type','application/json');
                    if (users.length === 0 ) {
                        msg = `No users found with user name: ${userName}`;
                        console.log(msg);
                        res.status(200).send([msg]);
                    } else {
                        console.log(`User controller returns user ${userName} successfully.`);
                        res.status(200).send(users[0]);
                    }
                }
            });
        }

        if (id) {
            userManager.getUserById ( id, function(error, users){
                if (error){
                    console.log('Users controller returns an error (400)');
                    res.status(400).send(error);
                } else {
                    res.set('Content-Type','application/json');
                    if (users.length === 0 ) {
                        msg = `No user found with id: ${id}`;
                        console.log(msg);
                        res.status(200).send([msg]);
                    } else {
                        console.log(`User controller returns user with ${id} successfully.`);
                        res.send(user[0]);
                    }
                }
            });
        }
    });

    console.log('User controller initialized');
};