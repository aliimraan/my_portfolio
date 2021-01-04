const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    number:{type:Number},
    c_name:{type:String},
    msg:{type:String}
})

const contactModel=mongoose.model('contacts',contactSchema)
module.exports=contactModel