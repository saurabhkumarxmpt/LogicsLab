require('dotenv').config();
const express=require('express');
const cors=require('cors');
const database=require('./config/database'); //database file
const AuthRoute=require('./routes/authRoutes'); //auth Routes
const BlogRoute=require('./routes/userRoutes'); //blog routes
const app=express();
const PORT=process.env.PORT;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true              
}));

database();   //database

app.use('/auth',AuthRoute); //Auth Route
app.use('/user',BlogRoute); //User Route

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