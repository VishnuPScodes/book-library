import mongoose from "mongoose";


const postSchema=mongoose.Schema({
    book_name:String,
    category:String,
    date:String,
    email:String,
    full_name:String,
    tags:[String],

})


const postMessage=mongoose.model('postMessage',postSchema)

export default postMessage