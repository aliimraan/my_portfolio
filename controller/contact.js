const contactModel=require('../models/contact')

exports.addContact=(req,res)=>{
    const {name,email,number,c_name,msg}= req.body
    const newContactModel=new contactModel({name,email,number,c_name,msg})
    newContactModel.save().then(data=>{
        res.status(200).json({msg:'added successfully'})
    }).catch(err=>{
        res.status(400).json({msg:'not added'})
    })
}
