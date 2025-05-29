import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
const Home=()=>{
    return(
        <>
        <div className="min-h-screen w-full bg-amber-100">
        <div>
            <Navbar/>
        </div>
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-10 gap-8 mt-3">
            <div className="md:w-1/2 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
                "Bas likhne do dil ko — yahi hai <span className="text-blue-600">WriteFlow</span> ka magic."
                </h1>
                <button className="border text-black px-6 py-3  text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 mt-10 md:ml-[400px]">
                Explore All Blogs
                </button>
            </div>

            <div className="md:w-1/2 flex flex-col items-center space-y-6">
                <img
                src="/main_page_images/mainImage.png"
                alt="Blog Illustration"
                className="rounded-xl w-full max-w-sm"
                />    
            </div>
            </div>
        

        </div>
        <div>
            <BlogCard
            image="main_page_iamges/mainImage.png"
        date="May 16, 2025"
        readTime="2 min read"
        title="Transform your winter blues into winter creativity"
        subtitle="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices people to continue reading."
            />
        </div>

        </>
    )
}

export default Home;