import express from 'express'
import {Data} from './Sql'

import {Box} from './Interface'

export const router = express.Router()

let boxes:Box[] = []

router.get('/',(req,res)=>{

    res.send('sql is working')
    
})

router.post('/login',(req,res)=>{

    const {host,user,password,database} = req.body
    const data = new Data(host,user,password,database)
    console.log(`logged on : ${host}`)

    for (const box of boxes){
        if(box.Box==data){
            console.log({box:box.Box,data})
            res.redirect(307,`/requete/${box.id}`)
        }
    }

    boxes.push({
        id:boxes.length+1,
        Box:data
    })

    res.redirect(307,`/requete/${boxes.length}`)
})

router.post('/request/:id',(req,res)=>{
    const {id}=req.params
    const {request}=req.body

    let d
    console.log({boxes,request})

    for(const data of boxes){
        console.log({id,data:data.id})
        if(data.id==parseInt(id)){
            d=data.Box
        }
    };

    if(d){
        d.sql(request,res)
    }else{
        null
    }

    
})

