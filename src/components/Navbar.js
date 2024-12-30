import React, { useState } from "react";
import Link from "next/link";
import Loginbutton from "../components/Loginbutton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute w-full top-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Loginbutton />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4 ">
              <Link href="/">Home</Link>
              <Link href="/freelance">Freelance</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900   focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    className="inline"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900  "
            >
              About
            </Link>
            <Link
              href="#freelancers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900  "
            >
              Freelancers
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900  "
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
