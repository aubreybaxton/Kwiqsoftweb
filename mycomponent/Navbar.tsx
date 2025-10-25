
import React from 'react'
import Link from "next/link";
import Image from 'next/image'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link href={""} className="btn btn-ghost text-xl"><Image src="/assets/favicon_io/favicon.ico" alt="logo" width={40} height={24} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex text-xl">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={""}> Home</Link></li>
                    <li>
                        <div className="relative group inline-block">
                           
                            <Link href={"/services"} className=' bg-gray-800 text-white rounded'> Services</Link>

                            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ">
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 1</a>
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 2</a>
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 3</a>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="relative group inline-block">
                            <Link href={""} className=' bg-gray-800 text-white rounded'> Portfolios</Link>

                            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ">
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 1</a>
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 2</a>
                                <a href="#" className="block text-primary px-4 py-2 hover:bg-primary hover:text-white">Item 3</a>
                            </div>
                            

                        </div>
                    </li>
                    <li>
                        <Link href={"/astrology"}>Astrology Website Design</Link>
                    </li>
                    <li>
                        <Link href={"/tech"}>Tech</Link>
                    </li>
                    <li>
                        <Link href={"/blog"}>Blog</Link>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-error">Contact</a>
            </div>
        </div>
    )
}

export default Navbar