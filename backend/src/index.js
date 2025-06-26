import express from 'express'
import cors from 'cors'
import { PORT } from './Config/ServerConfig.js'

const app=express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/ping',(req,res)=>{
    res.json({
        msg:"pong"
    })
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})