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
        <div className="flex min-h-screen">
          <div className="flex-[2] p-4 border-r-1 border-gray-500">
            <h1 className='text-3xl'>Hello , {user?.name}</h1>
            <div className="px-10 pt-14">
            <div className='flex w-full justify-between'>
            <h1 className="text-xl font-semibold">All Blogs</h1>
            <button className="px-3 py-2 bg-indigo-600 text-white rounded">Create Blog</button>
            </div>
            <div className='bg-red-300 flex gap-4 wrap'>
                {blogs.lenght > 0 ?(
                    blogs.map((blog,index)=>(
                        <div>
                            
                        </div>
                    ))
                )}
            </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">

            </div>


        </div>
        <Outlet/>
        </>
    )
}

export default Dashboard;