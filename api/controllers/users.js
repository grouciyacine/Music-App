import {db} from '../connectDB.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register=(req,res)=>{
const q=`SELECT * FROM users WHERE email=?`
db.query(q,[req.body.email],(err,data)=>{
    if(err) return res.status(500).json(err);
    if(data.length) return res.status(409).json('email exist pleas change')
    //create user
const salt =bcrypt.genSaltSync(10)
const hashPassword=bcrypt.hashSync(req.body.password,salt)
const q="INSERT INTO users (`name`,`email`,`password`) value(?)";
const values=[req.body.name,req.body.email,hashPassword]
db.query(q,[values],(err,data)=>{
    if(err) return res.status(500).json(err);
    return res.status(202).json('user has been created')
})
})
}
export const login=(req,res)=>{
const q=`SELECT * FROM users WHERE email=?`
db.query(q,[req.body.email],(err,data)=>{
if(err) return res.status(500).json(err)
if(data.length===0) return res.status(408).json('user not fount')
const checkPassword=bcrypt.compare(req.body.password,data[0].password)
if(!checkPassword) return res.status(400).json('password or email wrong')
const token=jwt.sign({
    id:data[0].id},"SecretKey")
    const {password,...others}=data[0]
    res.cookie("accessToken",token,{
        httpOnly:true
    }).status(200).json(others)
})
}