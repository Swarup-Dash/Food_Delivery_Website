import React from 'react'
import Logo from "../Asset/Logo.png"
import Customerimg from '../Asset/Customerimg.jpg'
import { Link } from 'react-router-dom'


function Customernavbar() {
    return (
        <div className="relative w-full bg-black flex items-center justify-evenly">
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex space-x-2">
                    <span>
                        <img className="h-16 w-auto" src={Logo} alt="Eat Repeat" />
                    </span>
                </div>
            </div>
            <div className="hidden lg:block">
                <ul className="ml-9 flex space-x-8">
                    <li>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
                        >
                            <Link to="/">Home {" "}</Link>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
                        >
                            <Link to="/about">About {" "}</Link>


                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-white hover:bg-white rounded-xl p-2 hover:text-black"
                        >
                            <Link to="/contact">Contact Us {" "}</Link>

                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex grow justify-end">
                <input
                    className="flex h-10 w-[250px]  rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Serach"
                />
            </div>
            <div className="ml-2 mt-2 hidden lg:block">
                <span className="relative inline-block">
                    <img
                        className="h-10 w-10 rounded-full mr-12"
                        src={Customerimg}
                        alt="Dan_Abromov"
                    />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white mr-12"></span>
                </span>
            </div>

        </div>
    )
}

export default Customernavbar


