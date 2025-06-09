import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{

    const [isOpen, setIsOpen] = useState(false);
    return(
         <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
        <Link to='/'> <div className="text-2xl font-bold text-indigo-600">LogicLab</div></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/allblogs" className="text-gray-700 hover:text-indigo-600 hover:underline">
               All Blogs
            </Link>
            <Link to='/about' className="text-gray-700 hover:text-indigo-600 hover:underline">
              About
            </Link>
            <Link to='/contact' className="text-gray-700 hover:text-indigo-600 hover:underline">
              Contact
            </Link>
          </div>
 
          <div className="hidden md:block">
           <Link to='/login'> <button className="bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition cursor-pointer font-semibold rounded">
              Get Started
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/allblogs" className="block text-gray-700 hover:text-indigo-600">
           All Blogs
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link to='/contact' className="block text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
          <Link to='/login'><button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button></Link>
        </div>
      )}
    </nav>
    )
}

export default Navbar;