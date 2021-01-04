const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
require('dotenv').config()
const contactRoute=require('./routes/contact')
const reviewRoute=require('./routes/review')
const path=require('path')

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONN,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    console.log('db connected')
}).catch(err=>{
    console.log(err)
})

app.use(bodyParser.json())
app.use(cors())
app.use('/contact',contactRoute)
app.use('/review',reviewRoute)

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}

app.listen(process.env.PORT || 5000,()=>{
    console.log('server started')
})