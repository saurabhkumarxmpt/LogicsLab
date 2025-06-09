import {useEffect,useState} from 'react';
import Navbar from "../components/Navbar";
import HomeBlog from "../components/HomeBlog";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'
import axios from '../Axios';
const Home=()=>{
    const[blogs,setblogs]=useState([]);

    //this is used for define latest 5 blogs on home page
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
             <div className="flex flex-wrap min-h-screen bg-gray-50">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 p-4">
                <img
                src="/home_images/first_image.jpg"
                alt="image not found"
                className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Right Side Content */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                <div className="max-w-xl w-full">
                {/* Heading */}
                <h1 className="text-center text-2xl md:text-4xl font-semibold text-gray-700 py-4">
                    Solve Problem
                </h1>

                {/* Middle Image */}
                <div className="flex justify-center">
                    <img
                    src="/home_images/second_image.jpg"
                    alt="image not found"
                    className="w-[250px] md:w-[400px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 text-gray-600 hover:text-indigo-600 cursor-pointer transition duration-300">
                    <h2 className="text-lg md:text-2xl font-medium mb-2">
                    Solve the problem in HTML
                    </h2>
                    <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
                    dicta numquam a ea nisi error molestiae facere suscipit nemo ratione
                    mollitia officia eaque vero.
                    </p>
                </div>

                {/* Button */}
                <div className="text-center mt-6">
                    <Link to='allblogs' className="py-3 px-8 border border-gray-400 rounded hover:text-white hover:bg-indigo-600 transition duration-300">
                    All Posts
                    </Link>
                </div>
                </div>
            </div>
            </div>
            <div className="h-auto mt-20 px-1 md:px-[200px]">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 py-4 pb-20">Recent Posts</h1>
                
                {blogs && blogs.slice(0, 5).map((blog, index) => (
                    <Link to={`/${blog.author.username}/blog/${blog._id}`}>
                    <HomeBlog key={index}
                        title={blog.title}
                        username={blog.author.username}
                        content=  {blog.content.slice(0, 150)}
                        image={blog.image}
                        postDate={new Date(blog.createdAt).toDateString()}
                    />
                    </Link>
                    ))}

            </div>
            <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">Contact Me</h1>
            <p className="text-center text-gray-500 mb-6">Send a message regarding this website</p>

            {/* Form */}
            <form className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 mt-1 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
                </div>

                <div className="text-center">
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Send Message
                </button>
                </div>
            </form>
            </div>
            <Footer/>
        </>
    )
}


export default Home;