'use client'

import React from 'react'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { roboto } from '@/app/font';
import { PhoneCall } from 'lucide-react';


import { usePathname } from 'next/navigation';
import { PortfoliosJson, ServicesJson } from '../jsonfile.js'


function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = usePathname()
    const currentRoute = pathname;

    const IsActive = (path: string) => currentRoute === path;
    return (
        <div className={`navbar bg-violet-700 px-12 font-sans md:font-serif   ${scrolled ? " z-50 bg-white/90 backdrop-blur-md text-black fixed top-0 left-0 shadow transition-all duration-300" : "bg-transparent shadow-none"}`}>
            <div className="navbar-start">

                <Link href={"/"} className={`text-xl  `}>
                    {
                        scrolled ? <Image src="/assets/blogo.png" alt="logo" width={80} height={48} /> :
                            <Image src="/assets/wlogo.png" alt="logo" width={80} height={48} />
                    }

                </Link>
            </div>
            <div className={`navbar-center hidden lg:flex text-xl text-white ${roboto.className}`}>
                <ul className="menu menu-horizontal px-1">
                    <li className='text-xl'>
                        <Link href={"/"} className={`text-xl ${scrolled ? 'text-black' : 'text-white'} ${IsActive("/") ? "border-b-2 border-red-500 " : ""
                            }`}> Home</Link>
                    </li>
                    <li className='text-xl'>
                        <div className="relative group inline-block">
                            <div className={`flex gap-2 items-center ${IsActive("/services") ? "border-b-2 border-red-500 text-white" : "text-white hover:text-white"
                                }`}>
                                <Link href={"/services"} className={`${scrolled ? 'text-black' : 'text-white'} rounded space-x-2 group `}> Services</Link>
                                <svg
                                    className={`${scrolled ? 'text-black' : 'text-white'} w-4 h-4 transition-transform duration-300 origin-center group-hover:rotate-180`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 w-4xl bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-100">

                                <div className='grid grid-cols-3 gap-0' >
                                    {ServicesJson?.map((data) => (
                                        <div className='flex gap-2 p-2 rounded-lg' key={data.category}>
                                            <div><Image src={data.icon} alt={data.link} width={48} height={24} /></div>
                                            <div className=''>
                                                <a href={data.link}
                                                    className="block text-primary px-4 py-2 hover:bg-primary hover:text-white hover:rounded-lg">
                                                    {data.category}
                                                </a>
                                                {data.services?.map((Submenu) => (
                                                    <p key={Submenu.title} className='text-black pl-2 text-base text-nowrap'>{Submenu.title}</p>
                                                ))}
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </li>

                    <li className='text-xl'>
                        <div className="relative group inline-block">
                            <div className={`flex gap-2 items-center ${scrolled ? 'text-black' : 'text-white'} ${IsActive("/portfolios") ? "border-b-2 border-red-500 text-white" : ""
                                }`}>
                                <Link href={"/portfolios"} className={`${scrolled ? 'text-black' : 'text-white'} rounded space-x-2 group `}> Portfolios</Link>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 origin-center group-hover:rotate-180 align-middle"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 w-3xl bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-100">
                                <div className='grid grid-cols-3 gap-4' >
                                    {PortfoliosJson?.map((data) => (
                                        <div className='' key={data.title}>
                                            <Link href={'https://portfolio.kwiqsoft.com/'} className='w-full'>
                                                <Image src={data.image} alt={data.link} width={200} height={240} />
                                            </Link>
                                            <h4 className='text-black pl-2 text-base text-nowrap'>{data.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </li>
                    <li className='text-xl '>
                        <Link href={"/astrology"} className={`${scrolled ? 'text-black' : 'text-white'} ${IsActive("/astrology") ? "border-b-2 border-red-500 text-white" : ""
                            }`}>Astrology Website Design</Link>
                    </li>
                    <li className='text-xl'>
                        <Link href={"/tech"} className={`${scrolled ? 'text-black' : 'text-white'} ${IsActive("/tech") ? "border-b-2 border-red-500 " : ""
                            }`}>Tech</Link>
                    </li >
                    <li className='text-xl '>
                        <Link href={"/blog"} className={`${scrolled ? 'text-black' : 'text-white'} ${IsActive("/blog") ? "border-b-2 border-red-500 " : ""
                            }`}>Blog</Link>
                    </li>
                    <li className='text-xl text-white'>
                        <Link href={"/contact"} className={`${scrolled ? 'text-black' : 'text-white'} ${IsActive("/contact") ? "border-b-2 border-red-500 " : ""
                            }`}>Contact</Link>
                    </li>


                </ul>
            </div>
            <div className="navbar-end">
                <a className={`${scrolled ? 'bg-red-500 text-white' : 'text-white'} btn btn-outline align-middle btn-error border-2 text-lg hidden sm:block`}>Contact</a>
                <button className='btn sm:hidden'><PhoneCall /></button>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-white mx-1 md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                {/* <span className="badge">New</span> */}
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar