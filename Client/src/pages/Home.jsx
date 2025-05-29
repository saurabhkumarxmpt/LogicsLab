import Navbar from "../components/Navbar";
import HomeBlog from "../components/HomeBlog";
const Home=()=>{
    return(
        <>
        <Navbar/>
                    <div className="flex flex-wrap min-h-screen">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 p-4">
                <img
                src="/home_images/first_image.jpg"
                alt="image not found"
                className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Right Side Content */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                <div className="max-w-xl w-full">
                {/* Heading */}
                <h1 className="text-center text-2xl md:text-4xl font-semibold text-gray-700 py-4">
                    Solve Problem
                </h1>

                {/* Middle Image */}
                <div className="flex justify-center">
                    <img
                    src="/home_images/second_image.jpg"
                    alt="image not found"
                    className="w-[250px] md:w-[400px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 text-gray-600 hover:text-indigo-600 cursor-pointer transition duration-300">
                    <h2 className="text-lg md:text-2xl font-medium mb-2">
                    Solve the problem in HTML
                    </h2>
                    <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
                    dicta numquam a ea nisi error molestiae facere suscipit nemo ratione
                    mollitia officia eaque vero.
                    </p>
                </div>

                {/* Button */}
                <div className="text-center mt-6">
                    <button className="py-3 px-8 border border-gray-400 rounded hover:text-white hover:bg-indigo-600 transition duration-300">
                    All Posts
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className="h-auto mt-20 px-1 md:px-[200px]">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 py-4 pb-20">Recent Posts</h1>
                <HomeBlog
                image='/home_images/second_image.jpg'
                postDate='may 1,2025'
                username='saurabh_kumar'
                />
            </div>
        </>
    )
}


export default Home;