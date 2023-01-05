// define import express
const express = require ('express');
const app = express();
// define port
const port = 3000;
// define router frome route
const productsRouter = require('./route/products');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser')
// define import mongoose
const mongoose = require('mongoose');
// we install cors to get api frome any device
const cors = require ("cors");

// connection on mongoAtlass
mongoose.set('strictQuery', false);
// set connection url mongo db atlas and change user name
const connection = "mongodb+srv://mamdouh:mamdouh@cluster0.j6o8owp.mongodb.net/?retryWrites=true&w=majority";
// connect on url and test
mongoose.connect( connection,{useNewUrlParser: true},
).then(() => console.log("Database Connected Successfully"))

.catch((err) => console.log(err));


// use to make any operations on any imports module 
// hear type medlewears
app.use([
    bodyParser.urlencoded({extended : true},express.json())
])
app.use(cors());
app.use('/products',productsRouter)

app.listen(port,()=>{
    console.log("it's working");
})
module.exports = app;