const express=require('express')
const router=express.Router();
const {reviewContact}=require('../controller/review')
const {createReview,createReviewResult} =require('../middleware')

router.post('/create',createReview,createReviewResult,reviewContact)

module.exports=router