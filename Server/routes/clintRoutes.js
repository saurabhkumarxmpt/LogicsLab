const express=require('express');
const router=express.Router();
const{allblogs,fetchDetailBlog,fetchProfile}=require('../controllers/clintController');

router.get('/allblogs',allblogs);
router.get('/userBlog/:id',fetchDetailBlog);
router.get('/:username',fetchProfile);

module.exports=router;