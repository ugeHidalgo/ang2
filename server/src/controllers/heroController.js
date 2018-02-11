/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var heroManager = require('../managers/heroManager');


module.exports.init = function (app) {

    app.get ('/api/heroes', function (req, res, next) {
            
        heroManager.getHeroes (function(error, data){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                console.log(`Heroes controller returns ${data.length} heroes successfully`);
                res.set('Content-Type','application/json');
                res.send(data);
            }
        });
    });

    app.post('/api/heroes', function(request, response){

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

    app.get ('/api/heroes/:id', function (req, res, next) {

        var id = req.params.id,
            msg;
            
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

    app.get ('/api/heroes/:name', function (req, res, next) {

        var name = req.params.name,
            msg;
            
        heroManager.getHeroByName ( name, function(error, hero){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                res.set('Content-Type','application/json');
                if (hero.length === 0 ) {
                    msg = `No hero found with name: ${name}`;
                    console.log(msg);
                    res.status(200).send([msg]);
                } else {
                    console.log(`Heroes controller returns hero ${name} successfully.`);
                    res.send(hero);
                }
            }
        });
    });

    console.log('Heroes controller initialized');
};