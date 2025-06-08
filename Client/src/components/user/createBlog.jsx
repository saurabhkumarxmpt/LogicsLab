import UserNavbar from './Navbar';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../Axios';
const CreateBlog=()=>{

    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
     };

     const HandleSubmit=async(e)=>{
        e.preventDefault();

        const token = localStorage.getItem('token');
         const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image', image);

            try{
                const res=await axios.post('/user/create',formData,{
                    headers: {
                     'Content-Type': 'multipart/form-data',
                      Authorization: `Bearer ${token}`
                     }
                });
                console.log('Blog created:', res.data);
                alert('Blog successfully uploaded!');
                navigate(-1)
            }catch (err) {
                console.error('Error uploading blog:', err);
                alert('Something went wrong!');
                }
        }

    return(
        <>
        <UserNavbar/>
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10 relative">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-indigo-700 hover:text-indigo-900 font-medium flex items-center"
      >
        ⬅ Back
      </button>

      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-800">✍️ Write a Blog</h1>

      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="border border-gray-300 p-4 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          placeholder="Write your blog content..."
          rows="6"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          className="border border-gray-300 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <div>
          <label className="block text-gray-700 font-medium mb-2">📷 Poster Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-indigo-500 transition duration-300">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-indigo-100 file:text-indigo-700
                         hover:file:bg-indigo-200"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Upload a cover image for your blog post (PNG, JPG, etc.)</p>
        </div>

        {imagePreview && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">🖼 Preview:</p>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg shadow-md border"
            />
          </div>
        )}

        <button onClick={HandleSubmit} className="bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 transition duration-300 font-medium">
          🚀 Submit Blog
        </button>
      </div>
    </div>


        </>
    )
}

export default CreateBlog;