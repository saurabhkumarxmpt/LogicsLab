import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/auth_images/login.jpg"
            alt="image not found"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Login
            </h1>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="text-right text-sm">
                <a href="#" className="text-indigo-600 hover:underline">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                New here?{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Please sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
