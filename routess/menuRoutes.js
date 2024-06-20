const express=require('express')
const router=express.Router();
const MenuItem=require('../models/Menu');
router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newMenuitem=new MenuItem(data)
        const response=await newMenuitem.save()
        console.log('data saved')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'error in internal server'})
    }
})
router.get('/',async (req,res)=>{
    try{
        const data=await MenuItem.find();
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=router