import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';

const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App;