const Blog=require('../models/BlogSchema');
const User=require('../models/User');

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