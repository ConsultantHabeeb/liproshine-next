import React from "react";
import  Link  from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <nav className="space-x-8 mb-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Liproshine Consultancy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
