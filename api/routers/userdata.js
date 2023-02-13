import express from 'express'
import {getdata} from '../controllers/userdata.js'
const route=express.Router() 
route.get('/',getdata)

export default route