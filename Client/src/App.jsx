import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/user/Dashboard'
import PrivateRoute from './components/PrivateRoute';
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