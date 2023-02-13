import express from 'express'
import {postPlaylist,getPlaylist} from '../controllers/groupePlaylist.js'
const routes=express.Router()
routes.post('/post',postPlaylist)
routes.get('/get',getPlaylist)
export default routes