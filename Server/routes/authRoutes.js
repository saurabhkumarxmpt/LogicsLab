const express=require('express');
const {signUp,login} =require('../controllers/authControllers');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware');

router.post('/signup',signUp);
router.post('/login',login);
router.get('/:username',authMiddleware,(req,res)=>{ 
     res.json({user:req.user});
});

module.exports=router;
