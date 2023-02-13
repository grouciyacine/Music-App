import {db} from '../connectDB.js'
export const postPlaylist=(req,res)=>{
    const q=`select * from playlist where name=?`
    db.query(q,[req.body.name],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(401).json('name exist please change name')
        const q="insert into playlist (`name`,`img`,`groupPlaylistId`) value(?)"
        const values=[req.body.name,req.body.img,req.body.groupPlaylistId]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            res.status(202).json('data add successfully')
        })
    })


}
export const getPlaylist=(req,res)=>{
    const q=`SELECT * FROM playlist where groupPlaylistId=?`
    const gid=req.query.groupPlaylistId
    console.log(gid)
    db.query(q,[gid],(err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json(data)
    })
}
