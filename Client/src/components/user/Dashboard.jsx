import {useState,useEffect} from 'react';
import {useNavigate,useParams,Outlet } from 'react-router-dom';
import axios from '../../Axios';
import UserNavbar from './Navbar';

const Dashboard=()=>{
    const{username}=useParams();
    const[user,setUser]=useState(null);
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
            onsole.log('Profile fetch failed', err);
            localStorage.removeItem('token');
            navigate('/login');
        }

        
    }
    useEffect(()=>{
            fetchProfile();
        },[]);
  
    return(
        <>
        <UserNavbar/>
        <div className="flex min-h-screen">
          <div className="flex-[2] bg-blue-300 p-4 border-r-1 border-gray-500">
            <h1 className='text-3xl'>Hello , {user?.name}</h1>
            <div>

            </div>
          </div>
          <div className="flex-[1] bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
  <img
    src={user?.profileImage || '/default-profile.png'}
    alt="Profile"
    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-4"
  />
  <p className="text-lg font-semibold text-gray-800">{user?.name || 'Unnamed'}</p>
  <p className="text-sm text-gray-600 mt-1">{user?.bio || 'No bio provided'}</p>
</div>

        </div>
        <Outlet/>
        </>
    )
}

export default Dashboard;