import { getPosts ,createPosts} from "../controller/posts.js";
import express from "express";

const router=express.Router();

router.get('/',getPosts)
router.post('/',createPosts)

export default router