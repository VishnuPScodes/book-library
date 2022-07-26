import mongoose from "mongoose";


const romanceSchema=mongoose.Schema({
  
    image:String,
    name:String,
    
    author:String,
    download:String,
    rating:Number,
    des:String,
    comments:[String],

})


const romances=mongoose.model('romance',romanceSchema)

export default romances