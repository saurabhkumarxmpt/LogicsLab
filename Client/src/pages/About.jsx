import Navbar from "../components/Navbar"; // import Navbar
import Footer from "../components/Footer"; // import Footer


const AboutPage=()=>{


    return(
        <>
        <Navbar/>
       <div className="min-h-screen flex flex-col md:flex-row">
  {/* Image Section */}
  <div className="md:w-1/2 w-full">
    <img 
      src="/home_images/about_page.jpg" 
      alt="Image not Provided"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-12 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-2">
                About This Website
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4">
                <span>
                Welcome to our simple blog platform where anyone can <strong>sign up</strong> and start sharing their thoughts through blogs.
                Users have full control to <strong>edit</strong> or <strong>delete</strong> their posts at any time.
                </span>
                <br />
                <span>
                This website is crafted with love and code by <span className="text-blue-600 font-semibold">Saurabh Kumar</span>, aiming to make writing and sharing easy for everyone.
                </span>
                <br />
                <span>
                If you enjoy using this website, please don’t hesitate to leave your valuable feedback on the <span className="text-blue-500 font-medium">Contact</span> page — I’ll be happy to hear from you and respond!
                </span>
            </p>
            </div>
            </div>
        <Footer/>
        </>
    )
}

export default AboutPage;