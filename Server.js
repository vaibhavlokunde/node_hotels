const express=require('express')
const app=express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
require('dotenv').config();
app.get('/',(req,res)=>{
    res.send("welcome to our page")
})
const menuRoutes=require('./routess/menuRoutes')
app.use('/menu',menuRoutes);

const personRoutes=require('./routess/personRoutes')
app.use('/person',personRoutes);

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("Server is now running")
})