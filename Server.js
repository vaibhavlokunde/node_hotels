const express=require('express')
const app=express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
require('dotenv').config();
const passport=require('./auth')


//middleware function
app.get('/',(req,res)=>{
    res.send('welcome to our hotel')
})

const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] : Request made to: ${req.originalUrl}`);
    next()
}
app.use(logRequest)
app.use(passport.initialize());
app.get('/',(req,res)=>{
    res.send('welcome to our hotel')
})
const localAuthMiddlewear=passport.authenticate('local',{session:false});

const menuRoutes=require('./routess/menuRoutes')
app.use('/menu',menuRoutes);

const personRoutes=require('./routess/personRoutes')
app.use('/person',localAuthMiddlewear,personRoutes);

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("Server is now running")
})