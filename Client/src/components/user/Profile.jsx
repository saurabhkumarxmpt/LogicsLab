import {useState,useEffect} from 'react';
import axios from '../../Axios';
import {useNavigate} from 'react-router-dom';
const Profile=()=>{
    const[user,setUser]=useState(null);
    const navigate=useNavigate();

    const fetchProfile=async()=>{
        const token=localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }

        try{
            const res=await axios.get('/auth/profile',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(res.data.user);
        }catch(err){
            onsole.log('Profile fetch failed', err);
            localStorage.removeItem('token');
            navigate('/login');
        }

        useEffect(()=>{
            fetchProfile();
        },[]);
        
        const handleLogout = () => {
            localStorage.removeItem('token');
            navigate('/login');  
            };
    }
    return(
        <>
        <div>
      <h2>Welcome to Your Profile</h2>
      {user ? (
        <>
          <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Profile</h2>
  
  <div className="space-y-3">
    <p className="text-gray-700">
      <span className="font-semibold text-gray-900">Name:</span> {user.name}
    </p>
    <p className="text-gray-700">
      <span className="font-semibold text-gray-900">Username:</span> {user.username}
    </p>
    <p className="text-gray-700">
      <span className="font-semibold text-gray-900">Email:</span> {user.email}
    </p>
  </div>

  <div className="mt-6 text-center">
    <button
      onClick={handleLogout}
      className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl transition duration-200"
    >
      Logout
    </button>
  </div>
</div>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
        </>
    )
}

export default Profile;