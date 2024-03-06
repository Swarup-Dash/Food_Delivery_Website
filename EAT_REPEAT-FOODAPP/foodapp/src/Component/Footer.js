import React from 'react'
import Logo from "../Asset/Logo.png"


const Footer = () => {
  return (
    <footer class="w-full">
      <div class="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div class="w-full px-4 md:w-1/2 lg:px-0">
          <h1 class="max-w-sm text-3xl font-bold text-white">Subscribe to our Newsletter</h1>
          <form action="" class="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              class="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
              type="email"
              placeholder="Email"
            />
            <button
              type="button"
              class="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
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
                class="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </form>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div class="mb-8 lg:mb-0">
            <p class="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
            <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>About us</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Our Vision</li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div class="mb-8 lg:mb-0">
            <p class="mb-6 text-lg font-semibold text-gray-700 ">Contact Us</p>
            <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>Investor Relation</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div class="mb-8 lg:mb-0">
            <p class="mb-6 text-lg font-semibold text-gray-700 ">We deliver to</p>
            <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Odisha</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Gurgaon</li>
              <li>Delhi</li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div class="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div class="inline-flex items-center">
          <div className="inline-flex items-center space-x-2 ">
            <span>
              <img className="h-16 w-auto" src={Logo} alt="Eat Repeat" />
            </span>
          </div>
          <span class="ml-4 text-lg font-bold text-white">Eat Repeat</span>
        </div>
        <div class="mt-4 md:mt-0">
          <p class="text-sm font-medium text-gray-500">
            © 2024 Eat Repeat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
