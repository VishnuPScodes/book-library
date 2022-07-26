import postMessage from '../models/postMessage.js'
import childrens from '../models/children.js'


export const getChikdren=async (req,res)=>{
   try {
    const childrendata=await childrens.find()
   // console.log(postMessages)
    res.status(200).json(childrendata)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }


  
export const getChildrenId=async (req,res)=>{
    try {
     const childrendata=await childrens.findById(req.params.id)
    // console.log(postMessages)
     res.status(200).json(childrendata)
    } catch (error) {
     res.status(404).json({message:error.message})
    }
   }
export const updateChildren=async (req,res)=>{
    const {comment}=req.body
    try {
        const childrendata=await childrens.findByIdAndUpdate(req.params.id);

        childrendata.comments=comment
        res.status(200).json(childrendata)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}  
  export const createChildren=async (req,res)=>{
    const post=req.body
    const newPost=new childrens(post)
   try {
    await newPost.save()
    res.status(200).json(newPost)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }

  export const searchChild=async (req,res) => {
    let result=await childrens.find({
      '$or':[
        {name:{$regex:req.params.key}},
        {author:{$regex:req.params.key}}
      ]
    })
    res.send(result)
}