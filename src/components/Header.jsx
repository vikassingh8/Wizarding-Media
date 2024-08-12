import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleSetActive = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <ImCross size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 p-4 lg:p-0`}
        >
          {[
            "Home",
            "Treatments",
            "Skin & FAQ",
            "Medical Clinic",
            "Photo Gallery",
            "Media",
            "About Us",
            "Contacts",
          ].map((link) => (
            <li key={link} className="my-2 lg:my-0">
              <a
                href="#"
                onClick={() => handleSetActive(link)}
                className={`block lg:inline-block text-center ${
                  activeLink === link
                    ? "text-orange-500 font-medium"
                    : "text-gray-700 font-medium hover:text-blue-500"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
