import {db} from '../connectDB.js'
import jwt from 'jsonwebtoken'
export const getdata=(req,res)=>{
  const token=req.cookies.accessToken
  if(!token) return res.status(401).json(`token not exist `)
  jwt.verify(token,'SecretKey',(err,userinfo)=>{
    if(err) return res.status(404).json('token not valid')

    const q="select * from users where `id`=?"
    db.query(q,[userinfo.id],(err,data)=>{
    if(err) return res.status(500).json(err)
    return res.status(202).json(data)
  })
  })

}
