var moongoose = require ('mongoose'),
    Schema = moongoose.Schema,
    UserSchema = new Schema ({
        id : Number,
        username: String,
        password: String,
        firstName: String,
        lastName: String
    });

module.exports = moongoose.model ('Users', UserSchema);