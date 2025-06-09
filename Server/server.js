require('dotenv').config();
const express=require('express');
const cors=require('cors');
const database=require('./config/database'); //database file
const AuthRoute=require('./routes/authRoutes'); //auth Routes
const BlogRoute=require('./routes/userRoutes'); //blog routes
const ClintRoutes=require('./routes/clintRoutes');
const app=express();
const PORT=process.env.PORT;
const path = require('path');

app.use(express.json());

app.use(cors({
    origin: process.env.RENDER_URI,
    credentials: true              
}));
database();   //database

app.use('/auth',AuthRoute); //Auth Route
app.use('/user',BlogRoute); //User Route
app.use('/clint',ClintRoutes); //Clint Route
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/',(req,res)=>{
    res.json({message:'this is home page'})
});

app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run");
    }
})