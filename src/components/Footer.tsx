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
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.382 1.24-3.22-.124-.305-.536-1.527.117-3.177 0 0 1.01-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.285-1.553 3.294-1.23 3.294-1.23.656 1.65.245 2.872.12 3.177.775.838 1.24 1.91 1.24 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.815 1.102.815 2.222v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.594 24 12.297 24 5.373 18.627.297 12 .297z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
