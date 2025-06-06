const Blog=require('../models/BlogSchema'); //Blog Schema
const User=require('../models/User'); //User Schema


//Create a new blog after login
exports.createBlog=async(req,res)=>{
    console.log("USER FROM TOKEN:", req.user);
    const{title,content,image}=req.body;
    const userId=req.user._id;
    try{
        const user=await User.findById(userId);

        const newBlog=new Blog({
            title,
            content,
            image,
            author:{
                _id:user._id,
                username:user.username
            }
        })

        await newBlog.save();
        res.status(201).json({ message: "Blog created", blog: newBlog });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}


//Find all blogs using the username
exports.getBlogsByUsername=async(req,res)=>{
    const username=req.params.username;

    try{
        const blogs=await Blog.find({'author.username': username}).sort({ createdAt: -1 });
        res.json({blogs});
    }catch (err) {
    console.error("Error getting blogs by username:", err);
    res.status(500).json({ error: 'Server error' });
  }
}
