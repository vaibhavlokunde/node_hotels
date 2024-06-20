const express=require('express')
const app=express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("welcome to our page")
})
const menuRoutes=require('./routess/menuRoutes')
app.use('/menu',menuRoutes);

const personRoutes=require('./routess/personRoutes')
app.use('/person',personRoutes);

app.listen(3001,()=>{
    console.log("Server is not running")
})