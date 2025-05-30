const User=require('../models/User');
const bcrypt = require('bcrypt');

//register a new User
exports.signUp=async(req,res)=>{
    try{
    const{name,username,email,password}=req.body;
    const hasedPassword=await bcrypt.hash(password, 10); // hash the password
    const user=new User({name,username,email,password:hasedPassword});
    await user.save();     //save user on the database
    res.json({message:'User registered successfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}