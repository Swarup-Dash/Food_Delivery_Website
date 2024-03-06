import React from 'react'
import Bara from '../Asset/Bara.jpg'
import Dahibara from '../Asset/Dahibara.jpg'
import Butterpaneer from '../Asset/Butterpaneer.jpg'
import { Link } from 'react-router-dom'

function Addcart() {
  return (
    <div className="mx-auto my-4 max-w-4xl md:my-6">
      <div className="overflow-hidden  rounded-xl shadow gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 py-6 text-white md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-white"
                        >
                          Contact information
                        </h3>
                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                          />
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Payment details
                        </h3>
                        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              for="cardNum"
                              className="block text-sm font-medium text-white"
                            >
                              Card number
                            </label>
                            <div className="mt-1">
                              <input
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                id="cardNum"
                              />
                            </div>
                          </div>
                          <div className="col-span-2 sm:col-span-3">
                            <label
                              for="expiration-date"
                              className="block text-sm font-medium text-white"
                            >
                              Expiration date (MM/YY)
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="expiration-date"
                                id="expiration-date"
                                autoComplete="cc-exp"
                                className="block h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="cvc"
                              className="block text-sm font-medium text-white"
                            >
                              CVC
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                autoComplete="csc"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Shipping address
                        </h3>
                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              for="address"
                              className="block text-sm font-medium text-white"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="city"
                              className="block text-sm font-medium text-white"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="region"
                              className="block text-sm font-medium text-white"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="postal-code"
                              className="block text-sm font-medium text-white"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Billing information
                        </h3>
                        <div className="mt-6 flex items-center">
                          <input
                            id="same-as-shipping"
                            name="same-as-shipping"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            checked=""
                          />
                          <div className="ml-2">
                            <label
                              for="same-as-shipping"
                              className="text-sm font-medium text-white"
                            >
                              Same as shipping information
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex justify-center border-t border-gray-200 pt-6">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <Link to="/payment">Make Payment</Link>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-5 py-6 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                <li className="flex items-stretch justify-between space-x-5 py-7">
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                        src={Bara}
                        alt=""
                      />
                    </div>
                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold">Bada 1 plate</p>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                          South India Item
                        </p>
                      </div>
                      <p className="mt-4 text-xs font-medium ">x 1</p>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">
                      ₹25
                    </p>
                    <button
                      type="button"
                      className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      <span className="sr-only">Remove</span>
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
                        className="h-5 w-5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="flex items-stretch justify-between space-x-5 py-7">
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                        src={Dahibara}
                        alt=''
                      />
                    </div>
                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold">Dahi Bada</p>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                          Odisha Item
                        </p>
                      </div>
                      <p className="mt-4 text-xs font-medium ">x 1</p>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">₹40</p>
                    <button
                      type="button"
                      className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      <span className="sr-only">Remove</span>
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
                        className="h-5 w-5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="flex items-stretch justify-between space-x-5 py-7">
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                        src={Butterpaneer}
                        alt=''
                      />
                    </div>
                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold">Butter paneer</p>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                          New Delhi item
                        </p>
                      </div>
                      <p className="mt-4 text-xs font-medium ">x 1</p>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">₹40 </p>
                    <button
                      type="button"
                      className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      <span className="sr-only">Remove</span>
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
                        className="h-5 w-5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="mt-6 border-gray-200" />
            <form action="#" className="mt-6">
              <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                <div className="flex-grow">
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter coupon code"
                  />
                </div>
                <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center justify-between text-gray-600">
                <p className="text-sm font-medium">Sub total</p>
                <p className="text-sm font-medium">₹105</p>
              </li>
              <li className="flex items-center justify-between text-gray-900">
                <p className="text-sm font-medium ">Total</p>
                <p className="text-sm font-bold ">₹105</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Addcart
