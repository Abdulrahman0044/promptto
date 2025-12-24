import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0  bg-[#0D1027] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/Promptto.png"
              alt="PromptTo Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center space-x-1 transition-colors ${
                  isActive("/services")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-400 hover:text-blue-600"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a
                    href="#ai-training"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                  >
                    AI Training & Research
                  </a>
                  <a
                    href="#iot"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                  >
                    IoT Solutions
                  </a>
                  <a
                    href="#web-dev"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                  >
                    Web Development
                  </a>
                  <a
                    href="#accelerator"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                  >
                    Startup Accelerator
                  </a>
                </div>
              </div>
            </div>
            <Link
              to="/projects"
              className={`transition-colors ${
                isActive("/projects")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                isActive("/blog")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/learn"
              className={`transition-colors ${
                isActive("/learn")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Learn
            </Link>
            <Link
              to="/accelerator"
              className={`transition-colors ${
                isActive("/accelerator")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Accelerator
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/learn"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Learn
            </Link>
            <Link
              to="/accelerator"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Accelerator
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <hr className="my-2 border-gray-200" />
            <Link
              to="/contact"
              className="block w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
