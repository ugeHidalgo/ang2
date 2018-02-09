/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var heroManager = require('../managers/heroManager');


module.exports.init = function (app) {

    app.get ('/api/heroes', function (req, res) {
            
        heroManager.getHeroes (function(error, heroes){
            if (error){
                console.log('Heroes controller returns an error (400)');
                res.status(400).send(error);
            } else {
                res.set('Content-Type','application/json');
                console.log(`Heroes controller returns ${heroes.length} heroes successfully`);
                res.send(heroes);
            }
        });
    });

    app.get ('/api/heroes/:name', function (req, res) {

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