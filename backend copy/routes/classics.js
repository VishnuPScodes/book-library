import { getclassics ,createclassics, getclassicsId, updateclassics, searchClassic} from "../controller/classics.js";
import express from "express";

const router=express.Router();

router.get('/',getclassics)
router.post('/',createclassics)
router.patch('/:id/comments',updateclassics)
router.get('/:id',getclassicsId)
router.get('/search/:key',searchClassic);
export default router