import * as mysql from 'mysql'
export const db=mysql.createConnection({
    host:"localhost",
    user:"yacine",
    password:"yacine",
    database:"musicapp",
    

})
