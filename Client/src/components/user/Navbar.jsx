// This is the navbar for logged-in users
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {

  const navigate = useNavigate();

//Handle the logout 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Logic Lab</h1>
      
      <div className="space-x-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
