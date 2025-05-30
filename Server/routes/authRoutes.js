const express=require('express');
const {signUp,login} =require('../controllers/authControllers');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware');

router.post('/signup',signUp);
router.post('/login',login);
router.get('/profile',authMiddleware,(req,res)=>{ 
    res.json({
        message: 'User profile data',
        user: req.user
    })
});

module.exports=router;
