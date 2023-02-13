import express from 'express'
import {postPlaylist,getPlaylist} from '../controllers/playlist.js'
const routes=express.Router()
routes.post('/post',postPlaylist)
routes.get('/get',getPlaylist)
export default routes