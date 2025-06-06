import {useState,useEffect} from 'react';
import {useNavigate,useParams,Outlet } from 'react-router-dom';
import axios from '../../Axios';
import UserNavbar from './Navbar';

const Dashboard=()=>{
    const{username}=useParams();
    const[user,setUser]=useState(null);
    const[blogs,setBlogs]=useState([]);

    const navigate=useNavigate();
    
    const fetchProfile=async()=>{
        const token=localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }

        try{
            const res=await axios.get(`/auth/${username}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(user);
            setUser(res.data.user);
        }catch(err){
            console.log('Profile fetch failed', err);
            localStorage.removeItem('token');
            navigate('/login');
        }

        
    }
    const fetchBlogs=async()=>{

        try{
            const res=await axios.get(`/user/${username}`);
            setBlogs(res.data.blogs);
            console.log(res.data.blogs);
        }catch(err){
            console.log('blogs fetch failed', err);
        }
    }

    
    useEffect(()=>{
            fetchProfile(),
            fetchBlogs()
        },[]);
  
    return(
        <>
        <UserNavbar/>
        <div className='flex'>
        <div className='w-3/4 bg-gray-200 p-4'>
            <h1 className='pt-8 px-7 text-2xl font-semibold'>Hello, <span className="italic font-normal text-gray-700">{user?.name}👋</span></h1>
            <div className='mt-16'>
                <div className='flex justify-between px-8 border-b pb-5 border-gray-400'>
                    <p className='text-xl font-semibold text-gray-600'>All Blogs</p>
                    <button className='py-1 px-4 bg-indigo-800 text-white rounded cursor-pointer'>Create</button>
                </div>
                <div className='bg-red-300'>
                1
                </div>
            </div>
        </div>
        <div className='w-2/4 bg-gray-100 p-4'>
            {/* Bada Div */}
            Bada Div
        </div>
        </div>

        </>
    )
}

export default Dashboard;