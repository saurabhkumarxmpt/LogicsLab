import {useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import  Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import axios from '../Axios';
const AllBlogs=()=>{
    const[blogs,setblogs]=useState([]);

    const fetchBlogs=async()=>{
        try{
            const res=await axios.get('/clint/allblogs');
            await setblogs(res.data);
            console.log(res.data);
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(()=>{
        fetchBlogs();
    },[])
    return(
        <>
        <Navbar/>
       <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-32 py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image (show only if not null) */}
            <Link to={`/${blog.author.username}/blog/${blog._id}`}>
              {blog.image ? (
                <img
                  src={`http://localhost:3000${blog.image}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
            </Link>

            {/* Content */}
            <div className="p-5">
              {/* Title */}
              <Link to={`/${blog.author.username}/blog/${blog._id}`}>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
              </Link>

              {/* Author */}
              <div className="flex items-center text-sm text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <Link
                  to={`/profile/${blog.author.username}`}
                  className="hover:underline hover:text-blue-600"
                >
                  @{blog.author.username}
                </Link>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-1">
                Published on {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
        </>
    )
}

export default AllBlogs;