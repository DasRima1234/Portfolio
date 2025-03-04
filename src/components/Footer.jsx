import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-center py-6 mt-10">
        <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Designed & Developed by You</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
        </div>
      </footer>
    );
  }
  