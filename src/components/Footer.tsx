import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex title-font font-medium items-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-indigo-400">Rukhsar Ashraf</span>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-pink-200 mt-4 sm:mt-0 text-center sm:text-left">
          © 2024 DynamicBlog. All rights reserved. Built with by{" "}
          <a
            href="#"
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rukhsar Ashraf
          </a>
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {/* GitHub */}
          <a
            href="https://github.com/RukhsarAshraf"
            className="text-gray-400 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>
    </footer>
  );
}
