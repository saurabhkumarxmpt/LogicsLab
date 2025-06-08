const User=require('../models/User');
const Blog=require('../models/BlogSchema');

exports.allblogs=async(req,res)=>{
    try{
        const data=await Blog.find().sort({createdAt: -1});
        res.json(data)
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


exports.fetchDetailBlog=async(req,res)=>{
    const BlogId=req.params.id;
    try{
        const blog=await Blog.findById(BlogId);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.fetchProfile=async(req,res)=>{
    try{
    const username=req.params;
    const user=await User.findOne(username).select('-password');
    if(!user) return res.status(404).json({message:"user not found"});
    res.json(user);
    }catch(err){
        res.status(500).json({message:err.message})
    }
}