import  express   from "express";
import userRouter from '../api/routers/users.js'
import singerRouter from './routers/singer.js'
import songRouter from './routers/songs.js'
import playlistRouter from './routers/playlist.js'
import groupPlaylistRouter from './routers/groupePlaylist.js'
import userdata from './routers/userdata.js'
import playListSong from './routers/playlistSong.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import path from 'path'
const app=express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
    })

app.use(express.json())
app.use(cookieParser())

const storage=multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'../client/public/upload')
    },
    filename:function(req,file,cb){
        cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
    
})
const upload =multer({storage:storage})

app.post("/api/v1/upload",upload.single("img"),(req,res)=>{
    console.log(req.file)
    res.send('upload')

})
app.use('/api/v1/groupPlaylist',groupPlaylistRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/singer',upload.single("img"),singerRouter)
app.use('/api/v1/songs',songRouter)
app.use('/api/v1/play',playlistRouter)
app.use('/api/v1/userda',userdata)
app.use('api/v1/playSongs',playListSong)

app.listen(8800,console.log('port listening on port 8800'))
