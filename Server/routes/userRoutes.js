const express=require('express');
const router=express.Router();
const auth=require('../middlewares/authMiddleware');
const{createBlog,getBlogsByUsername}=require('../controllers/blogControllers');

router.post('/create',auth,createBlog);
router.get('/:username',getBlogsByUsername);

module.exports=router;