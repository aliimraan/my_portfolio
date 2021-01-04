const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    about:{type:Number},
    message:{type:String}
})

const reviewModel=mongoose.model('reviews',reviewSchema)
module.exports=reviewModel