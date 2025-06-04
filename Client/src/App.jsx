import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/user/Dashboard'
import Profile from './components/user/Profile'

const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/:username' element={<Dashboard/>}>
      <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;