import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from '../../Axios';

const SignUp = () => {

  const navigate=useNavigate();

  const[user,setUser]=useState({
    name:'',
    username:'',
    email:'',
    password:''
  });

  const HandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setUser((prevUser)=>({...prevUser,[name]:value}));
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault();
    try{
        await axios.post('/auth/signup',user);
        alert('data seved');
        navigate('/login');
    }catch(err){
      alert('something wrong');
      console.log(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="h-auto md:min-h-screen flex flex-col md:flex-row ">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/auth_images/signup.jpg"
            alt="Sign Up"
            className="w-full h-screen object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white p-8 rounded-xl ">
            <h1 className="text-2xl font-bold mb-6 text-center">Register Here</h1>

            <form className="space-y-4" onSubmit={HandleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={HandleChange}
                  id="fullName"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={HandleChange}
                  id="username"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={HandleChange}
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={HandleChange}
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-center">
              Already a user?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
