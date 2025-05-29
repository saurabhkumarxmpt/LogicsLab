const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} LogicLab. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
