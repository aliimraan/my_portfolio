const reviewModel=require('../models/contact')

exports.reviewContact=(req,res)=>{
    const newReviewModel=new reviewModel(req.body)
    newReviewModel.save().then(data=>{
        return res.status(200).json({msg:'added successfully'})
    }).catch(err=>{
        return res.status(400).json({msg:'not added'})
    })
}
