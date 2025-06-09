import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactPage=()=>{
    return(
        <>
        <Navbar/>
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
  {/* Left Side Image */}
  <div className="md:w-1/2 w-full">
    <img
      src="/home_images/contact-page.jpg"
      alt="Contact Illustration"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side Form */}
  <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-2">
      Contact Me
    </h2>

    <form className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-gray-600 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-600 font-medium mb-1">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-600 font-medium mb-1">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Write your message here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

        <Footer/>
        </>
    )
}

export default ContactPage;