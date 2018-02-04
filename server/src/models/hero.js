var moongoose = require ('mongoose'),
    Schema = moongoose.Schema,
    HeroSchema = new Schema ({
        name : String
    });

module.exports = moongoose.model ('Hero', HeroSchema);