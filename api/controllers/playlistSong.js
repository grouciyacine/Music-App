import {db} from '../connectDB.js'

export const getSong=(req,res)=>{
const q="select * from songs where playlistId=?"
db.query(q,[req.query.id],(err,data)=>{
    if(err) return res.status(500).json(err)
    return res.status(202).json(data)
})
}