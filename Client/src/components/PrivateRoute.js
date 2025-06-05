import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate=useNavigate();
  const token = localStorage.getItem('token');
  return token ? children : navigate('/login');
};

export default PrivateRoute;