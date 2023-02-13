import { db } from "../connectDB.js";
import express from 'express'
export const PutSongs=(req,res)=>{
const q=`select s.*,singer.id from songs as s JOIN sigers as singer ON (s.singerId=singer.id) 
where s.singerId=? OR singerId=?`
const id=req.query.singerId
console.log(id)
db.query(q,[id,id],(err,data)=>{
    if (err) return res.status(500).json({err})
    const q="insert into songs (`name`,`img`,`song`,`singerId`) value(?)"
    const values=[req.body.name,req.body.img,req.body.song,id]
    db.query(q,[values],(err,data)=>{
        if (err) return res.status(500).json({err})
        return res.status(202).json('data add success')
    })
    
})
}
export const getSongs=(req,res)=>{
    const q=`select s.*,singer.id from songs as s JOIN sigers as singer ON (s.singerId=singer.id) 
    where s.singerId=? OR singerId=?`
    
    const id=req.params.singerId
    console.log(id)
db.query(q,[id,id],(err,data)=>{
    if (err) return res.status(500).json({err})
    res.status(202).json(data)
    
})
}

export const getAllSong=(req,res)=>{
    const q="select * from songs"
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(202).json(data)
    })
    }

    export const getSongById=(req,res)=>{
        const q="select * from songs where playlistId=?"
        db.query(q,[req.query.id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(202).json(data)
        })
        }
    export const postSong=(req,res)=>{
        const q="update  songs set `playlistId`=? where id=?"
        db.query(q,[req.query.playlistId,req.query.Id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    }