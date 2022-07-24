import mongoose from "mongoose";


const classicsSchema=mongoose.Schema({
    name:String,
    image:String,
    author:String,
    download:String,
    rating:Number,

    comments:[String],

})


const classicss=mongoose.model('classics',classicsSchema)

export default classicss