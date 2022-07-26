

const mongoose = require("mongoose");
const connectDB=()=>mongoose.connect('mongodb://localhost:27017/books',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log('err',err)
})

module.exports=connectDB