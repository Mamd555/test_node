const express = require('express');
const AUTH = require('../model/auth_Model');
const bceypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    signup: async (req, res) => {

        const user = AUTH.find({
            email: req.body.email
        })
        if( user.length >=1){ return res.json({
            massage:'this email alerady exist'
        })}else{
            bceypt.hash(req.body.password, 10, async(error,hash)=>{
                if(error){
                    return res.json({
                        massage : 'error in password'
                    })
                }else{
                    const auth = await new AUTH({
                name : req.body.name,
                email : req.body.email,
                password : hash,
                name : req.body.name,
                type :req.body.type
                

                    }).save();
                    res.json({
                        massage:'create user successfully',
                        email : auth.email,
                        password : auth.password,
                        type:auth.type
                    })
                }
                
            })
            
        }
    },
    login: async (req,res)=>{
        const user = await AUTH.find({
            // فى حالة دخول الأيميل 
            email : req.body.email
            
        })
        // هنا نضع بعض الشروط 
        /*
        -  اولا هل يوجد الأيميل لو اقل من 1 يبقى بش موجودوالا الأيميل موجود 
        - والا ادخل اليوزر وشفر الباسوورد وفى حالة الخطأ قولى الباسورد خطأ 
        - ولو فى نتيجة لو اليوزر موجود ونوعه  0 وهذا يعنى يوزر سين عليه بواسطة الأيميل والأسم
        */
        
        
        if(user.length<1){
return res.status(401).json({
    massage :"this email not exist"
})
        }else{
            // her we hash password and confirmed
            bceypt.compare(req.body.password,user[0].password,async(error,result)=>{
            if(error){
                return res.status(401).json({
                    massage:error
                })}
                if(result){
                 if(user[0].type==0){
                    const token = jwt.sign({
                        email:user[0].email,
                        id:user[0].id,
                        name:user[0].name
                        // "USER" is secret_key or you can type any secret key "user121211**212#"
                    },"USER");
                    return res.status(200).json({
                        massage:"user logged in",
                        email:user[0].email,
                        id : user[0]._id,
                        token:token,
                        name:user[0].name,
                        type:user[0].type,
                    });

                 }else{
                    const token = jwt.sign({
                        email:user[0].email,
                        id:user[0]._id,
                        name:user[0].name
                        // "USER" is secret_key or you can type any secret key "user121211**212#"
                    },"ADMIN");
                 }
                }
            } 
            );// after we make route
        }
    }

}