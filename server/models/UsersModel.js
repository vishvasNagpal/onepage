const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    Name:String
});

module.exports = mongoose.model('users',UserSchema);