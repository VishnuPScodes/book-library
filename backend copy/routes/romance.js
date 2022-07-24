import { getRomance ,createRomance, getRomanceId,searchRomance, createRomanceComment} from "../controller/romance.js";
import express from "express";

const router=express.Router();

router.get('/',getRomance)
router.post('/',createRomance)
// router.put('/:id',createRomanceComment)
router.get('/search/:key',searchRomance);

router.get('/:id',getRomanceId)
export default router