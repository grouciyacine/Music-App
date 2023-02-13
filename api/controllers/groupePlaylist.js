import {db} from '../connectDB.js'
export const postPlaylist=(req,res)=>{
    const q=`select * from groupPlaylist where name=?`
    db.query(q,[req.body.name],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(401).json('name exist please change name')
        const q="insert into groupPlaylist (`name`) value(?)"
        db.query(q,[req.body.name],(err,data)=>{
            if(err) return res.status(500).json(err)
            res.status(202).json('data add successfully')
        })
    })


}
export const getPlaylist=(req,res)=>{
    const q=`SELECT * FROM groupPlaylist`
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json(data)
    })
}
