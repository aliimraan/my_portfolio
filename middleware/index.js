const {check,validationResult}=require('express-validator')

exports.createContact=[
    check('name')
    .notEmpty()
    .withMessage('Fullname is Required'),

    check('email')
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Valid Email is Required'),

    check('number')
    .notEmpty()
    .withMessage('Phone number  is Required'),

    check('c_name')
    .notEmpty()
    .withMessage('Company Name  is Required'),

    check('msg')
    .notEmpty()
    .withMessage('Message is Required'),

]

exports.createContactResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.errors.length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }else{
        next()
    }
    
}


exports.createReview=[
    check('name')
    .notEmpty()
    .withMessage('Fullname is Required'),

    check('email')
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Valid Email is Required'),

    check('about')
    .notEmpty()
    .withMessage('Phone number  is Required'),

    check('message')
    .notEmpty()
    .withMessage('Company Name  is Required'),
]

exports.createReviewResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.errors.length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }else{
        next()
    }
    
}

