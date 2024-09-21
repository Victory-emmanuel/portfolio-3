import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Mobile Screen */}
        <nav className="md:hidden bg-white shadow-lg py-2 px-4 fixed z-20 top-0 right-0 left-0  ">
          <div className="flex items-center justify-between">
            <Link to="/">
              {/* Logo.... change logo image  */}
              <img
                className="block ss:max-w-[4rem] xx:max-w-[3rem]"
                src="https://i.postimg.cc/ZKHtfnrc/logo-design-2.png"
                alt="Logo"
              />
              {/* /// */}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon when open
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              ref={menuRef} // reference to the menu
              className="mt-2 space-y-2 fixed top-[5rem]  right-2 xx:left-[50%] ss:left-[65%] bg-white shadow-md text-right pr-2 z-10"
            >
              <Link
                to="/"
                className="block text-lg text-secondary hover:text-primary hover:bg-darkAccent duration-300 py-2 px-4"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-lg text-secondary hover:text-primary hover:bg-darkAccent duration-300 py-2 px-4"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-lg text-secondary hover:text-primary hover:bg-darkAccent duration-300 py-2 px-4"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className="block text-lg text-secondary hover:text-primary hover:bg-darkAccent duration-300 py-2 px-4"
                onClick={toggleMenu}
              >
                Service
              </Link>
              <Link
                to="/contact"
                className="block text-lg text-secondary hover:text-primary hover:bg-darkAccent duration-300 py-2 px-4"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>

        {/* Desktop Screen */}
        <nav className="mx-12 relative top-0 left-0 right-0 py-2 bg-white hidden md:block">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex justify-start" data-type="image">
              <Link className="image" to="/">
                {/* Logo ...change logo image*/}
                <img
                  className="block max-w-[4rem]"
                  src="https://i.postimg.cc/ZKHtfnrc/logo-design-2.png"
                  alt="Logo"
                />
                {/* /// */}
              </Link>
            </div>
            <div>
              <ul className="flex flex-row items-center space-x-6">
                <li>
                  <Link
                    className="text-secondary hover:text-primary text-lg hover:bg-darkAccent py-2 px-4 duration-300"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary hover:text-primary text-lg hover:bg-darkAccent py-2 px-4 duration-300"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary hover:text-primary text-lg hover:bg-darkAccent py-2 px-4 duration-300"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary hover:text-primary text-lg hover:bg-darkAccent py-2 px-4 duration-300"
                    to="/services"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary hover:text-primary text-lg hover:bg-darkAccent py-2 px-4 duration-300"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default NavBar;
