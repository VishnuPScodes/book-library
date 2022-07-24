import { getshortstory ,createshortstory, getshortstoryId, updateshortstory, searchShort} from "../controller/shortstory.js";
import express from "express";

const router=express.Router();

router.get('/',getshortstory)
router.post('/',createshortstory)
router.patch('/:id/comments',updateshortstory)
router.get('/:id',getshortstoryId);
router.get('/search/:key',searchShort);
export default router