import mongoose from "mongoose";


const childrenSchema=mongoose.Schema({
    name:String,
    image:String,
    author:String,
    download:String,
    rating:Number,

    comments:[String],

})


const childrens=mongoose.model('children',childrenSchema)

export default childrens