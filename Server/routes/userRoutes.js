const express=require('express');
const router=express.Router();
const auth=require('../middlewares/authMiddleware');
const{createBlog}=require('../controllers/blogControllers');

router.post('/create',auth,createBlog);

module.exports=router;