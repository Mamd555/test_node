const express = require ('express');
// هنا بنفصل عمليات الأرسال والطلب والحذف كوظائف بنعملها على الدتا بيس
// module.exports to send this function from this module to app.js or any module
const PRODUCTS = require('../model/products');
module.exports = {
    // function getProducts
    getProducts: async (req, res, next) => {
        const products = await PRODUCTS.find();
        res.json({
            
            result: products.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    desc: res.desc,
                    price: res.price,
                }
            })
        })
    },
    insertProduct: async (req, res) => {
        const products = await new PRODUCTS({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc,
        }).save()
        res.json({
            "massage": "inserted successfully",
            id: products.id,
            name: products.name
        })
    },

    deleteProducts: async (req, res) => {
        // her requist id from this product from Api -- params is mean paramter
        const id = req.params.id;
        // her we add findByIdAndRemove function to delete products by id
        const del = await PRODUCTS.findByIdAndRemove(id);
        // her response json from this delet return
        res.json({
            "delete" : del });
       
    }
}



