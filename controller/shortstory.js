import postMessage from '../models/postMessage.js'
import shortstorys from '../models/shortstory.js'


export const getshortstory=async (req,res)=>{
   try {
    const shortstorydata=await shortstorys.find()
   // console.log(postMessages)
    res.status(200).json(shortstorydata)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }


  
export const getshortstoryId=async (req,res)=>{
    try {
     const shortstorydata=await shortstorys.findById(req.params.id)
    // console.log(postMessages)
     res.status(200).json(shortstorydata)
    } catch (error) {
     res.status(404).json({message:error.message})
    }
   }
export const updateshortstory=async (req,res)=>{
    const {comment}=req.body
    try {
        const shortstorydata=await shortstorys.findByIdAndUpdate(req.params.id);

        shortstorydata.comments=comment
        res.status(200).json(shortstorydata)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}  
  export const createshortstory=async (req,res)=>{
    const post=req.body
    const newPost=new shortstorys(post)
   try {
    await newPost.save()
    res.status(200).json(newPost)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }
  export const searchShort=async (req,res) => {
    let result=await shortstorys.find({
      '$or':[
        {name:{$regex:req.params.key}},
        {author:{$regex:req.params.key}}
      ]
    })
    res.send(result)
}