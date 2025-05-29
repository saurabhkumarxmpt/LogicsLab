import { useState } from "react";
const Navbar=()=>{

    const [isOpen, setIsOpen] = useState(false);
    return(
         <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="text-2xl font-bold text-indigo-600">LogicLab</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 hover:underline">
               All Blogs
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 hover:underline">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 hover:underline">
              Contact
            </a>
          </div>
 
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition cursor-pointer font-semibold rounded">
              Get Started
            </button>
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
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
           All Blogs
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </a>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
    )
}

export default Navbar;