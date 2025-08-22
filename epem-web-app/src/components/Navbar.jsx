import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Events", path: "/Events" },
    { name: "Counseling", path: "/Counseling" },
    { name: "I'm New", path: "/New" },
    { name: "Contact", path: "/ContactUs" },
    { name: "Testy", path: "/Testy" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} // replace with your logo
              alt="EPEM Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-white">
              EPEM Church
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-white hover:text-yellow-200 transition font-medium ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-6">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-teal-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-yellow-400 text-teal-800 font-semibold hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg"
        >
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md text-white hover:bg-yellow-200 hover:text-teal-800 transition ${
                      isActive ? "bg-yellow-200 text-teal-800 font-semibold" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Auth Buttons (Mobile) */}
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/members" className="px-4 py-2 bg-green-600 text-white rounded-lg">
              View Members
              </Link>

              <Link
                to="/login"
                className="block text-center px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-teal-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-center px-4 py-2 rounded-lg bg-yellow-400 text-teal-800 font-semibold hover:bg-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
