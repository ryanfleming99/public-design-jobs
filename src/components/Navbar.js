import React, { useEffect, useState } from "react";
import AuthButton from "../components/AuthButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const d = new Date();
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(d);

  function ToggleMegaMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 md:py-4 ${
        isScrolled
          ? "bg-white shadow-md transition-100 md:py-2 "
          : "bg-transparent shadow-md"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto bg-white md:bg-transparent pt-2 ">
        {/* Logo/Title */}
        <Link
          href="https://www.publicdesignjobs.co.uk"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            className={` ${
              isScrolled ? "!text-black" : "!text-white"
            } self-center md:text-xl font-semibold whitespace-nowrap md:text-black drop-shadow-lg md:text-white drop-shadow-lg `}
          >
            Happy {day}!
          </span>
        </Link>

        {/* AuthButton for Desktop */}
        <div className="hidden md:flex items-center md:order-2 space-x-4 rounded-md bg-white ">
          <AuthButton />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={ToggleMegaMenu}
          data-collapse-toggle="mega-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="mega-menu"
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className={
              "flex flex-col mt-4 font-medium md:flex-row md:mt-0 gap-16 md:space-x-8 rtl:space-x-reverse "
            }
          >
            {router.pathname !== "/" && (
              <li>
                <Link
                  href="/"
                  className={`block md:text-white md:drop-shadow-lg  py-2 px-3 md:text-blackborder-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-70  ${
                    isScrolled ? "!text-black" : "!text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/about"
                className={`block md:text-white md:drop-shadow-lg  py-2 px-3 md:text-blackborder-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-70  ${
                  isScrolled ? "!text-black" : "!text-white"
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`block md:text-white md:drop-shadow-lg  py-2 px-3 md:text-blackborder-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-70  ${
                  isScrolled ? "!text-black" : "!text-white"
                }`}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/freelancers"
                className={`block md:text-white md:drop-shadow-lg  py-2 px-3 md:text-blackborder-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-70  ${
                  isScrolled ? "!text-black" : "!text-white"
                }`}
              >
                Freelancers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block md:text-white md:drop-shadow-lg  py-2 px-3 md:text-blackborder-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-70  ${
                  isScrolled ? "!text-black" : "!text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* AuthButton for Mobile */}
      {isMenuOpen && (
        <div className="block md:mt-4 md:hidden px-6 py-4 pt-2 bg-white md:bg-transparent">
          <AuthButton />
        </div>
      )}
    </nav>
  );
}
