// define import express
const express = require ('express');
const app = express();
const dotenv = require('dotenv').config()
//console.log(dotenv.parsed);
// define port
const PORT =  parseInt(process.env.PORT) || 3005;


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
//const connection = process.env.
// connect on url and test
mongoose.connect(process.env.MONGODB_URI,
    {
       dbName:process.env.DB_NAME ,
       user:process.env.DB_USER,
       pass:process.env.DB_PASS,
       useUnifiedTopology:true,
        useNewUrlParser: true,
},
).then(() => console.log("Database Connected Successfully"))

.catch((err) => console.log(err));


// use to make any operations on any imports module 
// hear type medlewears
app.use(cors());
app.use([
    bodyParser.urlencoded({extended : true},express.json(),cors(),express.urlencoded({extended : true}))
]);

app.use('/products',productsRouter)


app.listen(PORT,()=>{
    console.log("it's working' " + PORT + ' ...welcome');
})
module.exports = app;