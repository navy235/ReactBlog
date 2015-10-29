import mongoose from 'mongoose'
import config from '../configs/server';

var db = mongoose.createConnection(config.mongo.blog);

var Crypto = require('../utils/crypto');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now}
});

UserSchema.virtual('cookietoken').get(function () {
    var str = '';
    str += 'username=' + this.username;
    str += 'password=' + Crypto.hashCrypto(this.password);
    str = str.toLowerCase();
    var secretStr = Crypto.hashCrypto(str);
    str += 'secret=' + secretStr;
    return str;
})

UserSchema.set('toJSON', {
    virtuals: true
});

var Users = db.model('User', UserSchema);

module.exports = Users;