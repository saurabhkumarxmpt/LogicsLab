const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    author:{
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        username:String
    },
    
});

module.exports = mongoose.model('Blogs', blogSchema);