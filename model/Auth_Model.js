const mongoose = require('mongoose');
const auth = mongoose.Schema({

    name: String,
    email:String,
    password:String,
    type:String,

});

module.exports = mongoose.model('AUTH',auth)