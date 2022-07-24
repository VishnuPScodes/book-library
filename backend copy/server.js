

// const express = require("express");
import express from 'express'
import  mongoose  from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import PostRouter from './routes/posts.js'
import RomanceRouter from './routes/romance.js'
import ChildrenRouter from './routes/children.js'
import ShortstoryRouter from './routes/shortstory.js'
import ClassicsRouter from './routes/classics.js'
// const connectDB=require('./mongodb')
// const cors = require('cors');
// import {}

const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

// app.use('/posts',PostRouter)
app.use('/romance',RomanceRouter)
app.use('/children',ChildrenRouter)
app.use('/shortstory',ShortstoryRouter)
app.use('/classics',ClassicsRouter)

const CONNECTION_URL="mongodb+srv://vishnu:vishnu@cluster0.pgnr1.mongodb.net/?retryWrites=true&w=majority"
const port=process.env.port ||4000
mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})
// mongoose.set('useFindAndModify',false)
// app.use('/api',todoRoute)
