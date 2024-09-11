'use client'
import { useState } from "react";
import  Link  from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-slate-400">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://via.placeholder.com/150x50" // Placeholder image, replace with actual logo
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/code/repos"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Repos
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Breadcrumb style) */}
      {isOpen && (
        <nav className="md:hidden bg-slate-400">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/code/repos"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Repos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
