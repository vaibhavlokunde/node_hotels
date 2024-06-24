const mongoose=require('mongoose');
require('dotenv').config();
//define mongodb connection URL

const mongoURL=process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//get default connection
//Mongoose maintains a default connection object representing  the MongoDB connection

const db=mongoose.connection;
//Define event listeners
db.on('connected',()=>{
    console.log("Mongo is now connected")
})
db.on('error',(err)=>{
    console.log("there is error in connection")
})
db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
})

//export database
module.exports=db;

