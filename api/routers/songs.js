import express from 'express'
import {getSongs,PutSongs,getAllSong, getSongById, postSong} from '../controllers/songs.js'
const route=express.Router()
route.post('/post',PutSongs)
route.get('/get/:singerId',getSongs)
route.get('/all',getAllSong)
route.get('/SId',getSongById)
route.post('/into',postSong)
export default route