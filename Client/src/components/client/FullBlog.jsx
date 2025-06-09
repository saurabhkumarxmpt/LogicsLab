import {useEffect,useState} from 'react';
import {useParams,useNavigate ,Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import axios from "../../Axios.jsx";
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';


const FullBlog=()=>{
    const {id,username}=useParams();
    const navigate = useNavigate();
    const [blog,setBlog]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    //fetch blogs and save into state
    const fetchBlog=async()=>{
        try{
            const res=await axios.get(`/clint/userBlog/${id}`);
            setBlog(res.data);
            console.log(res.data);
        }catch(err){
            setError('Failed to load blog');
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchBlog() 
    },[]);

    //for controling the errors
    if (error) return <p>{error}</p>;
    if (!blog) return <p>Blog not found</p>;


    return(
        <>
        <Navbar/>
        {loading && (
            <div className='flex justify-center items-center'>
                Loading...
            </div>
        )}

          <div className="max-w-3xl mx-auto p-6 min-h-screen">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
            >
                <FaArrowLeft />
                Back
            </button>

            <div className="flex items-center gap-4 mb-6">
                <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${blog.author.username}`}
                alt="profile"
                className="w-12 h-12 rounded-full"
                />
                <div>
                <p className="text-lg font-semibold">{blog.author.name || 'Unknown'}</p>

                <Link to={`/profile/${username}`} className="text-sm text-indigo-500 hover:underline">@{blog.author.username}</Link>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

            {blog.image && (
                <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                />
            )}

            <div className="text-lg leading-7 whitespace-pre-line pb-[210px] text-gray-800">
                {blog.content}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default FullBlog;