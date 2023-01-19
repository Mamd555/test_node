// define import express
const express = require ('express');
const app = express();
const dotenv = require('dotenv').config()
//console.log(dotenv.parsed);
// define port
const PORT =  parseInt(process.env.PORT) || 3005;


// define router frome route
const productsRouter = require('./route/products');
const ConctsRouter = require ('./route/contactsRouter');
const AuthRouter = require ('./route/authRoute');
const user_check = require ('./auth_meddleware/verify_users');
const admin_check = require ('./auth_meddleware/verify_admin');
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
// medilwear route

app.use('/products',productsRouter);
app.use('/auth',AuthRouter);
app.get('/contacts',user_check);
app.post('/contacts',admin_check);
app.get('/contact',admin_check);
app.use('/contacts',ConctsRouter);


app.listen(PORT,()=>{
    console.log("it's working' " + PORT + ' ...welcome');
})
// ccc
module.exports = app;