
import postMessage from '../models/postMessage.js'
import romances from '../models/romance.js'


export const getRomance=async (req,res)=>{
   try {
    const romancedata=await romances.find()
   // console.log(postMessages)
    res.status(200).json(romancedata)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }


  
export const getRomanceId=async (req,res)=>{
    console.log(req)
    try {
     const romancedata=await romances.findById(req.params.id)
    // console.log(postMessages)
     res.status(200).json(romancedata)
    } catch (error) {
     res.status(404).json({message:error.message})
    }
   }
   export const createRomanceComment=async (req,res)=>{
    const post=req.body
    const newPost=new romances(post)
   try {
    await newPost.save()
    res.status(200).json(newPost)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }

export const searchRomance=async (req,res) => {
    let result=await romances.find({
      '$or':[
        {name:{$regex:req.params.key}},
        {author:{$regex:req.params.key}}
      ]
    })
    res.send(result)
}
  export const createRomance=async (req,res)=>{
    const post=req.body
    const newPost=new romances(post)
   try {
    await newPost.save()
    res.status(200).json(newPost)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
  }