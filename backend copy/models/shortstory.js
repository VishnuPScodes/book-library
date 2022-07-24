import mongoose from "mongoose";


const shortstorySchema=mongoose.Schema({
    name:String,
    image:String,
    author:String,
    download:String,
    rating:Number,

    comments:[String],

})


const shortstorys=mongoose.model('shortstory',shortstorySchema)

export default shortstorys