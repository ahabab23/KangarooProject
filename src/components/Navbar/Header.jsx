import React, { useState } from "react";
import logo from "../../Assets/Parallel-Blue-and-NO-BG-1.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    company: false,
    services: false,
  });
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Helper function to check active route
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed z-100 w-full">
      {/* Top Bar - Hidden on mobile screens */}
      <div className="bg-[#0f1932] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-14 py-2.5">
          <div className="flex space-x-4 text-white">
            <a
              href="#"
              className="hover:text-blue-400 border-r border-gray-500 pr-4 pt-0.5 border-l pl-4"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 border-r border-gray-500 pr-4 pt-0.5"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 border-r border-gray-500  pr-4 pt-0.5"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 border-r border-gray-500 pr-4 pt-0.5"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="tel:+254725534553"
              className="flex items-center space-x-1 hover:text-blue-400 border-r pr-4 pt-0.5 border-gray-500 border-l pl-4"
            >
              <FaPhoneAlt />
              <span>+254 725 534 553</span>
            </a>
            <a
              href="mailto:info@kangarosolutions.com"
              className="flex items-center space-x-1 hover:text-blue-400 border-r border-gray-500 pr-4 pt-0.5"
            >
              <FaEnvelope />
              <span>info@kangarosolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Modified for mobile responsiveness */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-14 py-4 md:py-6 h-16 md:h-25 font-bold">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Kangaroo Solutions" className="h-8 md:h-12" />
          </a>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex space-x-6 text-gray-800 font-bold items-center">
            {/* Home Link */}
            <Link
              to="/"
              className={`hover:text-blue-600 transition relative ${
                isActive("/") ? "text-blue-600" : ""
              }`}
            >
              Home
              <span
                className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 ${
                  isActive("/") ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                }`}
              ></span>
            </Link>

            {/* Our Company Dropdown */}
            <div className="relative group">
              <div
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-500 relative ${
                  location.pathname.startsWith("/about-us") ||
                  location.pathname.startsWith("/mission-vision") ||
                  location.pathname.startsWith("/why-choose-us") ||
                  location.pathname.startsWith("/our-team")
                    ? "text-blue-600"
                    : ""
                }`}
              >
                <span>Our Company</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 scale-x-0 group-hover:scale-x-100"></span>
              </div>
              <div className="absolute left-0 mt-8 w-60 bg-white border shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 invisible group-hover:visible transition-all duration-500 z-50 transform origin-top uppercase text-sm p-2">
                <Link
                  to="/about-us"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/about-us") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      ABOUT US
                    </span>
                  </span>
                </Link>
                <Link
                  to="/mission-vision"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/mission-vision") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      OUR MISSION AND VISION
                    </span>
                  </span>
                </Link>
                <Link
                  to="/why-choose-us"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/why-choose-us") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      WHY CHOOSE US
                    </span>
                  </span>
                </Link>
                <Link
                  to="/our-team"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/our-team") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      OUR TEAM
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-500 relative ${
                  location.pathname.startsWith("/strategy") ||
                  location.pathname.startsWith("/front-back") ||
                  location.pathname.startsWith("/ict") ||
                  location.pathname.startsWith("/development")
                    ? "text-blue-600"
                    : ""
                }`}
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 scale-x-0 group-hover:scale-x-100"></span>
              </button>
              <div className="absolute left-0 mt-8 w-96 bg-white border shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 invisible group-hover:visible transition-all duration-500 z-50 transform origin-top uppercase text-sm p-4">
                <Link
                  to="/strategy"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/strategy") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      STRATEGY DEVELOPMENT & EXECUTION
                    </span>
                  </span>
                </Link>
                <Link
                  to="/human"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/front-back") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      HUMAN CAPITAL MANAGEMENT
                    </span>
                  </span>
                </Link>
                <Link
                  to="/ict"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/ict") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      ICT CONSULTANCY SERVICES
                    </span>
                  </span>
                </Link>
                <Link
                  to="/development"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/development") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      FRONT AND BACKEND DEVELOPMENT
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Other Navigation Links */}
            <Link
              to="/projects"
              className={`hover:text-blue-600 transition relative ${
                isActive("/our-projects-portfolio") ? "text-blue-600" : ""
              }`}
            >
              Our Projects
              <span
                className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 ${
                  isActive("/our-projects-portfolio")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-600 transition relative ${
                isActive("/contact") ? "text-blue-600" : ""
              }`}
            >
              Our Contacts
              <span
                className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 ${
                  isActive("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              ></span>
            </Link>
            <Link
              to="/ict"
              className={`hover:text-blue-600 transition relative ${
                isActive("/ict") ? "text-blue-600" : ""
              }`}
            >
              ICT Consultancy Services
              <span
                className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-500 ${
                  isActive("/ict")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Mobile Menu Button and Search */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-blue-600">
              <FiSearch size={18} className="md:w-5 md:h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={20} className="md:w-6 md:h-6" />
              ) : (
                <FaBars size={20} className="md:w-6 md:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          >
            <div
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg transform transition-transform duration-500 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <img
                  src="https://kangarosolutions.com/wp-content/uploads/2020/09/Parallel-Blue-and-NO-BG-1.png"
                  alt="Kangaroo Solutions"
                  className="h-6 md:h-8"
                />
                <button onClick={toggleMobileMenu} className="text-gray-600">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="p-4 bg-[#0f1932] text-white text-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <FaPhoneAlt className="text-xs" />
                  <span className="text-sm">+254 725 534 553</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <FaEnvelope className="text-xs" />
                  <span className="text-sm">info@kangarosolutions.com</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400">
                    <FaTwitter className="text-sm" />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a href="#" className="hover:text-blue-500">
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a href="#" className="hover:text-pink-400">
                    <FaInstagram className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav
                className="p-4 overflow-y-auto"
                style={{ height: "calc(100vh - 180px)" }}
              >
                <Link
                  to="/"
                  className={`block py-3 border-b hover:text-blue-600 transition text-base ${
                    isActive("/") ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>

                {/* Our Company Mobile Dropdown */}
                <div className="border-b">
                  <button
                    onClick={() => toggleMobileDropdown("company")}
                    className="flex items-center justify-between w-full py-3 hover:text-blue-600 transition text-base"
                  >
                    <span>Our Company</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${
                        mobileDropdownOpen.company ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen.company && (
                    <div className="pl-4 pb-2">
                      <Link
                        to="/about-us"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/about-us")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/mission-vision"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/mission-vision")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Our Mission and Vision
                      </Link>
                      <Link
                        to="/why-choose-us"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/why-choose-us")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Why Choose Us
                      </Link>
                      <Link
                        to="/our-team"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/our-team")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Our Team
                      </Link>
                    </div>
                  )}
                </div>

                {/* Our Services Mobile Dropdown */}
                <div className="border-b">
                  <button
                    onClick={() => toggleMobileDropdown("services")}
                    className="flex items-center justify-between w-full py-3 hover:text-blue-600 transition text-base"
                  >
                    <span>Our Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${
                        mobileDropdownOpen.services ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen.services && (
                    <div className="pl-4 pb-2">
                      <Link
                        to="/strategy"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/strategy")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Strategy Development & Execution
                      </Link>
                      <Link
                        to="/human"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/front-back")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Human Capital Management
                      </Link>
                      <Link
                        to="/ict"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/ict") ? "text-blue-600 font-semibold" : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        ICT Consultancy Services
                      </Link>
                      <Link
                        to="/development"
                        className={`block py-2 text-sm hover:text-blue-600 transition ${
                          isActive("/development")
                            ? "text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        Front and Backend Development
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/our-projects-portfolio"
                  className={`block py-3 border-b hover:text-blue-600 transition text-base ${
                    isActive("/our-projects-portfolio")
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Our Projects
                </Link>
                <Link
                  to="/contact"
                  className={`block py-3 border-b hover:text-blue-600 transition text-base ${
                    isActive("/contact") ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Our Contacts
                </Link>
                <Link
                  to="/ict"
                  className={`block py-3 hover:text-blue-600 transition text-base ${
                    isActive("/ict") ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  ICT Consultancy Services
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
