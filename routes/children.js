
import express from "express";
import { createChildren, getChikdren, getChildrenId, searchChild, updateChildren } from "../controller/children.js";

const router=express.Router();

router.get('/',getChikdren)
router.post('/',createChildren)
router.patch('/:id/comments',updateChildren)
router.get('/:id',getChildrenId);
router.get('/search/:key',searchChild);
export default router