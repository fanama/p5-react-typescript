import express from 'express'
import { router } from './modules/Router'
import {resolve} from 'path'


const server = express()

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static(resolve(__dirname)+'/public'))
server.use('/sql',router)

server.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

server.listen(3000,()=>{console.log("Sql_node is on 3000")})