const express = require ('express');
const contactsModel = require('../model/contactsModel');
const CONTACTS = require ('../model/contactsModel');
module.exports = {
    insertContacts: async (req, res) => {
        const contacts = await new CONTACTS({
            name: req.body.name,
            phone: req.body.phone,
        }).save()
        res.json({
            "massage": "inserted successfully",
            id: contacts.id,
            name: contacts.name,
            phone:contacts.phone,
        })
    },
    getContacts: async (req, res, next) => {
        const contacts = await CONTACTS.find();
        res.json({
            
            result: contacts.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    phone:res.phone,
                }
            })
        })
    },
}