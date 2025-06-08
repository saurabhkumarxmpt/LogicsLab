const express=require('express');
const router=express.Router();
const auth=require('../middlewares/authMiddleware');
const{createBlog,getBlogsByUsername,updateBlog,deleteBlog}=require('../controllers/blogControllers');
const upload = require('../middlewares/multer');

router.post('/create',auth, upload.single('image'),createBlog); //create a blog
router.get('/:username',getBlogsByUsername); //Find blogs by username
router.put('/blog/:blogId', auth, updateBlog);
router.delete('/blog/:blogId', auth, deleteBlog);
module.exports=router;