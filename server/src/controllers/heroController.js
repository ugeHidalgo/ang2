/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var url = require ('url');
var heroManager = require('../managers/heroManager');


module.exports.init = function (app) {

    app.post('/api/heroes', function(request, response, next){

        var heroToUpdate =  request.body;

        heroManager.updateHero ( heroToUpdate, function(error, updatedHero){
             if (error){
                response.status(400).send('Failed to save Hero: ' + updatedHero.name);
            } else {
                response.set('Content-Type','application/json');
                response.status(201).send(updatedHero);
             }
        });
    });

    app.get ('/api/heroes', function (req, res, next) {
        // (GET)http:localhost:3000/api/heroes
        heroManager.getHeroes (function(error, data){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                console.log(`Heroes controller returns ${data.length} heroes successfully`);
                res.set('Content-Type','application/json');
                res.status(200).send(data);
            }
        });
    });

    app.get ('/api/heroes/:id', function (req, res, next) {
        var id = req.params.id,
            msg;

        // (GET)http:localhost:3000/api/hero/5a78a8fe458a4c457a3b4969
        heroManager.getHeroById ( id, function(error, hero){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                res.set('Content-Type','application/json');
                if (hero.length === 0 ) {
                    msg = `No hero found with id: ${id}`;
                    console.log(msg);
                    res.status(200).send([msg]);
                } else {
                    console.log(`Heroes controller returns hero ${id} successfully.`);
                    res.send(hero);
                }
            }
        });
    });

    app.delete ('/api/heroes/:id', function (req, res, next) {

        var id = req.params.id,
            msg;
            
        heroManager.deleteHeroById ( id, function(error, hero){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                res.set('Content-Type','application/json');
                if (hero.length === 0 ) {
                    msg = `No hero found with id: ${id}`;
                    console.log(msg);
                    res.status(200).send([msg]);
                } else {
                    console.log(`Heroes controller deletes hero ${id} successfully.`);
                    res.send(hero);
                }
            }
        });
    });

    app.get ('/api/hero', function (req, res, next) {
        // By name: (GET)http:localhost:3000/api/hero/?name=superman
        // By Id: (GET)http:localhost:3000/api/hero/?id=5a78a8fe458a4c457a3b4969
        var queryString = url.parse(req.url, true).query,
            name = queryString.name, 
            id = queryString.id,
            msg;
        
        if (name) {
            heroManager.getHeroesByName ( name, function(error, heroes){
                if (error){
                    console.log('Heroes controller returns an error (400)');
                    res.status(400).send(error);
                } else {
                    res.set('Content-Type','application/json');
                    if (heroes.length === 0 ) {
                        msg = `No heroes found with name: ${name}`;
                        console.log(msg);
                        res.status(200).send([msg]);
                    } else {
                        console.log(`Heroes controller returns heroes ${heroes.length} successfully.`);
                        res.status(200).send(heroes);
                    }
                }
            });
        }

        if (id) {
            heroManager.getHeroById ( id, function(error, hero){
                if (error){
                    console.log('Heroes controller returns an error (400)');
                    res.status(400).send(error);
                } else {
                    res.set('Content-Type','application/json');
                    if (hero.length === 0 ) {
                        msg = `No hero found with id: ${id}`;
                        console.log(msg);
                        res.status(200).send([msg]);
                    } else {
                        console.log(`Heroes controller returns hero ${id} successfully.`);
                        res.send(hero);
                    }
                }
            });
        }
    });

    console.log('Heroes controller initialized');
};