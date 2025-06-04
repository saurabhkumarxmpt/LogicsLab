const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
        name:String,
        username:{type:String,uniqe:true},
        email:{type:String,uniqe:true},
        password:String,
        profileImage:String,
        bio:String,
        blogs:[{type:mongoose.Schema.Types.ObjectId,ref: 'Blogs'}],

},{timestamps:true});


const User=mongoose.model('users',userSchema);

module.exports=User;