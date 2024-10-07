import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./NavbarStyle.css"

const MyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
          <span className="self-center logo text-2xl whitespace-nowrap text-white p-1">
            Anti Ai
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center m-3 p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isNavOpen}
          onClick={handleToggle}
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
        <div
          className={`w-full md:block md:w-auto ${isNavOpen ? "" : "hidden"}`}
          id="navbar-solid-bg"
        >
          <ul className="list_style flex flex-col font-normal mt-4 list-none rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-xl md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/home"
                className={`block py-2 px-3 md:p-0 text-white no-underline rounded md:bg-transparent ${location.pathname === '/home' ? 'bg-gray-600 md:text-blue-700 dark:bg-blue-600' : ''}`}
                aria-current={location.pathname === '/home' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`block py-2 px-3 md:p-0 no-underline text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${location.pathname === '/services' ? 'bg-gray-600 md:text-blue-700 dark:bg-blue-600' : ''}`}
                aria-current={location.pathname === '/Services' ? 'page' : undefined}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block py-2 px-3 md:p-0 no-underline text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${location.pathname === '/about' ? 'bg-gray-600 md:text-blue-700 dark:bg-blue-600' : ''}`}
                aria-current={location.pathname === '/About' ? 'page' : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/career"
                className={`block py-2 px-3 md:p-0 no-underline text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${location.pathname === '/career' ? 'bg-gray-600 md:text-blue-700 dark:bg-blue-600' : ''}`}
                aria-current={location.pathname === '/Career' ? 'page' : undefined}
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 px-3 md:p-0 no-underline text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${location.pathname === '/contact' ? 'bg-gray-600 md:text-blue-700 dark:bg-blue-600' : ''}`}
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;

