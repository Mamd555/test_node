const express = require('express');
const nodemon = require('nodemon');
const router = express.Router();
// thear we import function getProducts from logic
const {getProducts, insertProduct, deleteProducts}= require ('../logic/products');
router.get('/',getProducts);
router.post('/',insertProduct);
// '/:id' we but id paramters to delete with it and we can chang id to name if you need delete name and change in logic
router.delete('/:id',deleteProducts);
module.exports = router;