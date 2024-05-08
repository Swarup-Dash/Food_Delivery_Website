import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from "../Asset/Logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img className="h-16 w-auto" src={Logo} alt="Eat Repeat" />
          </span>
          <span className="font-bold text-white">Eat-Repeat</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
              >
                Home
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
              >
                <Link to="/about">About {" "}</Link>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
              >
                <Link to="/contact">Contact Us {" "}</Link>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
          
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-gray-500/55 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to="/register">Register</Link>
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-gray-500/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to="/login">Login</Link>
          </button>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>

  )
}

export default Navbar
