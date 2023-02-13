import express from 'express'
import {getSong} from '../controllers/playlistSong.js'
const route=express.Router()

route.get('/',getSong)
export default route