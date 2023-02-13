import express from 'express'
import { db } from '../connectDB.js'

export  const postSingers=(req,res)=>{
    const q=`SELECT * FROM sigers where name=?`
    db.query(q,[req.body.name],(err,data)=>{
        if(err) return res.status(500).json(err)
        const q="insert into sigers (`name`,`img`,`description`,`imageBig`) value(?)"
        const img=req.file.filename
        const values=[req.body.name,img,req.body.description,req.body.imageBig]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json('singer has been add')
        })
    })
}
export const getSingers=(req,res)=>{
    const q=`SELECT * FROM sigers`
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json(data)
    })
}

