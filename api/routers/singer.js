import {} from '../controllers/singer.js'
import express from 'express';
import {postSingers,getSingers} from '../controllers/singer.js'
const router=express.Router();
router.post('/post',postSingers)
router.get('/get',getSingers)
export default router

