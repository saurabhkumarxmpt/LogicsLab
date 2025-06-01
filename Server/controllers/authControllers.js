const User=require('../models/User');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

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


//Login User
exports.login=async(req,res)=>{

    const{username,password}=req.body;
    
    try{
        const user=await User.findOne({username});
        if(!user) return res.status(400).json({message:"user not found"});

        const isMatch=await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).json({ message: 'Password not matched' });

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{  expiresIn: '1h'});
        res.json({token,user});
    }catch(err){
      res.status(500).json({message:err.message});  
    }
}