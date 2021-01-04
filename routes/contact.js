const express=require('express')
const router=express.Router();
const {addContact}=require('../controller/contact')
const {createContact,createContactResult} =require('../middleware')

router.post('/create',createContact,createContactResult,addContact)

module.exports=router