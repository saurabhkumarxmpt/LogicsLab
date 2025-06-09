const Blog=require('../models/BlogSchema'); //Blog Schema
const User=require('../models/User'); //User Schema

//Create a new blog after login
exports.createBlog=async(req,res)=>{
    console.log("USER FROM TOKEN:", req.user);
    const{title,content}=req.body;
    const image=req.file.path;
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
        console.log()
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

exports.updateBlog=async(req,res)=>{
    const {blogId}=req.params;
    const {title,content}=req.body;
    const userId = req.user._id;
    
    try{
        const blog=await Blog.findById(blogId);
        if(!blog) return res.status(404).json({ message: "Blog not found" });
        if(blog.author._id.toString() !== userId.toString()) return res.status(403).json({ message: "Unauthorized" });
        
        blog.title = title;
        blog.content = content;
        const updatedBlog = await blog.save();
        res.status(200).json({ message: "Blog updated", blog: updatedBlog });
    }catch (err) {
    res.status(500).json({ message: "Server error during blog update" });
  }
}

exports.deleteBlog=async(req,res) => {
        const { blogId } = req.params;
        const userId = req.user._id;
        try{
            const blog=await Blog.findById(blogId);
            if(!blog) return res.status(404).json({ message: "Blog not found" });
            if (blog.author._id.toString() !== userId.toString())
            return res.status(403).json({ message: "Unauthorized" });

            await Blog.findByIdAndDelete(blogId);

            res.status(200).json({ message: "Blog deleted successfully" });
        }catch (err) {
        res.status(500).json({ message: "Server error during deletion" });
        }   
    
    }