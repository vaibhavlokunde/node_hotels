const mongoose=require('mongoose');
const bcrypt=require('bcrypt')

const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

personSchema.pre('save',async function (next){
    const person=this;
    if(!person.isModified('password'))return next();
    try{
        //hash password generation
        const salt=await bcrypt.genSalt(10)
        //generate hashed password
        const hashedPassword=await bcrypt.hash(person.password,salt);
        //save the hashed pass
        person.password=hashedPassword;
        next();
    }
    catch(err){
        next(err);
    }
})
personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch; 

    }
    catch(err){
        throw err;
    }
}
//create a model
const Person=mongoose.model('Person',personSchema)
module.exports=Person