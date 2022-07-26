import postMessage from '../models/postMessage.js'
import classicss from '../models/classics.js'


export const getclassics=async (req,res)=>{
   try {
    const classicsdata=await classicss.find()
   // console.log(postMessages)
    res.status(200).json(classicsdata)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }


  
export const getclassicsId=async (req,res)=>{
    try {
     const classicsdata=await classicss.findById(req.params.id)
    // console.log(postMessages)
     res.status(200).json(classicsdata)
    } catch (error) {
     res.status(404).json({message:error.message})
    }
   }
export const updateclassics=async (req,res)=>{
    const {comment}=req.body
    try {
        const classicsdata=await classicss.findByIdAndUpdate(req.params.id);

        classicsdata.comments=comment
        res.status(200).json(classicsdata)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}  
  export const createclassics=async (req,res)=>{
    const post=req.body
    const newPost=new classicss(post)
   try {
    await newPost.save()
    res.status(200).json(newPost)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }
  export const searchClassic=async (req,res) => {
    let result=await classicss.find({
      '$or':[
        {name:{$regex:req.params.key}},
        {author:{$regex:req.params.key}}
      ]
    })
    res.send(result)
}