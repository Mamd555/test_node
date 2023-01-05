const mongoose = require('mongoose');
const products = mongoose.Schema({
    name: String,
    price: Number,
    desc :String,

});

module.exports = mongoose.model('PRODUCTS',products)