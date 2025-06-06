import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login'; //Login page
import SignUp from './components/auth/SignUp'; //Sign Up Page
import Dashboard from './components/user/Dashboard' // User Dashboard Page
import PrivateRoute from './components/PrivateRoute'; // This is the Private Route for auth
const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/:username' element={
        <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>
        }/>
    </Routes>
    </>
  )
}

export default App;