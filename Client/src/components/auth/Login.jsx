import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link,useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from '../../Axios';
const Login = () => {

  //save user data 
  const[data,setData]=useState({
    username:'',
    password:''
  });

  const navigate=useNavigate();

  //handle the chnages of input value
  const HandleData=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData((e)=>({...e,[name]:value}));
  }

  //handle submit the data
  const SubmitData=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('/auth/login',data);
      const{token,user}=response.data;
      localStorage.setItem('token',token);
      console.log(user);
      alert('Login successful');
      navigate(`/${response.data.user.username}`);
    }catch(err){
      alert("somthing went wrong");
    }
  }
    
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/auth_images/login.jpg"
            alt="image not found"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md md:px-14">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Login
            </h1>

            <form className="space-y-4" onSubmit={SubmitData}>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={HandleData}
                  id="username"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium  mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={HandleData}
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-right text-sm">
                <a href="#" className="text-indigo-600 hover:underline">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                New here?{" "}
                <Link to='/signup' href="#" className="text-indigo-600 hover:underline">
                  Please sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
