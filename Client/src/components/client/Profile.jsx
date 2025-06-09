import {useState,useEffect} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';
import axios from '../../Axios';
import Navbar from '../Navbar';
const Profile=()=>{

    const { username } = useParams(); //get username from url
    const navigate=useNavigate(); 
    const[blogs,setBlogs]=useState([]); // save all blogs
    const[user,setUser]=useState(null); // save user profile

    //fetch all blogs from backend by using username
    const fetchBlogs=async()=>{
        try{
            const res=await axios.get(`/user/${username}`);
            await setBlogs(res.data.blogs);
        }catch(err){
            console.log(err.message);
        }
    }
    
    //fetch profile from backend by username
    const fetchProfile=async()=>{
        try{
            const res=await axios.get(`/clint/${username}`);
            await setUser(res.data);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchBlogs();
        fetchProfile();
    },[])


    return(
        <>
        <Navbar/>
      <div className="bg-gray-50 min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <div className="md:col-span-2 ">
        <h2 className="text-4xl  font-semibold pt-16 mb-12">{user?.name}</h2>
         <div className="border-t border-gray-200 flex flex-col divide-y">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
        key={index}
        className="flex items-start gap-6 p-4 hover:bg-gray-100 transition-all cursor-pointer border-b border-gray-200"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link to={`/${username}/blog/${blog._id}`}>
              <h3 className="text-xl font-semibold text-indigo-800 hover:underline">{blog.title}</h3>
            
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
              {blog.content}
            </p>
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-28 h-20 flex-shrink-0 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
        {blog.image ? (
          <img
            src={blog.image}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-600">No Image</span>
        )}
      </div>
      </div>

          ))
        ) : (
          <p className="text-gray-500 px-2 py-4">No blogs found.</p>
        )}
      </div>

    </div>
    <div className="">
     <div className="flex flex-col py-10 px-10">
        {/* Profile Image */}
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover  mb-2"
        />

        {/* Name */}
        <h2 className="text-lg font-semibold">{user?.name || "No Name"}</h2>

        {/* Username */}
        <p className="text-sm text-gray-500">@{user?.username || "username"}</p>

        {/* Bio */}
        <p className="text-sm text-gray-600 mt-2">
          {user?.bio || "No bio provided."}
        </p>

        {/* Follow Button */}
        <button 
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-1 rounded-full bg-black text-white text-sm hover:bg-gray-900"
        >
          Back
        </button>
      </div>

    </div>

  </div>
</div>

        </>
    )
}

export default Profile;