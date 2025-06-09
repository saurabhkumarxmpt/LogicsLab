import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login'; //Login page
import SignUp from './components/auth/SignUp'; //Sign Up Page
import Dashboard from './components/user/Dashboard'; // User Dashboard Page
import CreateBlog from './components/user/createBlog';
import PrivateRoute from './components/PrivateRoute'; // This is the Private Route for auth
import AllBlogs from './pages/AllBlogs';
import FullBlog from './components/client/FullBlog';
import Profile from './components/client/Profile';
import AboutPage from './pages/About';
import ContactPage from './pages/ContactPage';
const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allblogs' element={<AllBlogs/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path="/:username/blog/:id" element={<FullBlog/>} />
      <Route path="profile/:username" element={<Profile/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/:username' element={
        <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>
        }/>
        <Route path='/:username/create' element={
           <PrivateRoute>
            <CreateBlog/>
           </PrivateRoute>
        }/>
    </Routes>
    </>
  )
}

export default App;