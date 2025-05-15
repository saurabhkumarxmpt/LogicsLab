import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
      <nav className="flex items-center justify-between px-6 md:px-[100px] py-7 text-black">
      <div>
        <h1 className="text-2xl font-bold">WriteFlow</h1>
      </div>
      <div className="flex space-x-4 md:space-x-10 text-lg items-center">
        <p className="cursor-pointer hover:underline">Blogs</p>
        <Link to='/login'><button className="border py-[4px] px-4 hover:bg-black hover:text-white transition-all cursor-pointer">Login</button></Link>
      </div>
    </nav>
    )
}

export default Navbar;