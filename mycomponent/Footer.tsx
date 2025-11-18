"use client"

import { MailIcon, PhoneCall, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FloatingSquaresBackground from './bgStyle'
import { mandatoryPlaything } from '../app/font'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



function Footer() {
    const getYear = new Date().getFullYear();
    return (
        <div className='h-64'>
            <FloatingSquaresBackground>
                <div className='grid grid-cols-5 text-center px-12  text-white h-full'>
                    <div className='text-left col-span-2 p-4'>
                        <h4 className={`text-3xl ${mandatoryPlaything.variable}`}>Kwiqsoft</h4>
                        <div className='text-xl pt-6'>
                            Our business accounting packages are tailored to suit your individual financial requirements and unique business needs.
                        </div>

                        <div className='pt-6'>
                            <h2 className='text-xl'>Find us on</h2>
                            <div className='flex gap-2'>
                                <button className='border bg-red-400 rounded-lg p-2'><FaFacebookF />
                                </button>
                                <button className='border bg-red-400 rounded-lg p-2'><RiTwitterXFill />
                                </button>
                                <button className='border bg-red-400 rounded-lg p-2'><FaInstagram />
                                </button>
                                <button className='border bg-red-400 rounded-lg p-2'><FaLinkedin />
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='text-left'>
                        <h4 className='text-3xl'> Important Links </h4>
                        <div className='text-left text-xl pt-6 pl-4'>
                            <div className='hover:underline'><Link href='/about'>About Us</Link></div>
                            <div className='hover:underline'><Link href='/portfolios'>Projects</Link></div>
                            <div className='hover:underline'><Link href='/services'>Services</Link></div>
                            <div className='hover:underline'><Link href='/blog'>Blog</Link></div>
                            <div className='hover:underline'><Link href='/privacypolicy'>Privacy Policy</Link></div>
                        </div>
                    </div>
                    <div className='text-left'>
                        <h4 className='text-3xl'>Featured Services</h4>
                        <div className='text-left text-xl pl-4 pt-6'>
                            <div className='hover:underline'><Link href='/services'>Web Development</Link></div>
                            <div className='hover:underline'> <Link href='/services'> Android & IOS Development</Link></div>
                            <div className='hover:underline'> <Link href='/services'>Digital Marketing</Link></div>
                            <div className='hover:underline'>  <Link href='/services'>UI/UX Design</Link></div>


                        </div>
                    </div>
                    <div className='text-left'>
                        <div className='text-3xl pb-6 '>Contact us</div>
                        <div className='text-left text-xl pl-4 pt-6'>
                            <div className='flex gap-2'><PhoneCall /> Phone No</div>
                            <div className='hover:underline'><Link href={'tel: +91 9319924798'}>+91 9319924798</Link></div>
                            <div className='hover:underline'><Link href={'tel: +91 9311980594'}>+91 9311980594</Link></div>


                        </div>
                        <div className='text-left text-xl pl-4 pt-6'>
                            <div className='flex gap-2'><MailIcon />Email</div>
                            <div className='hover:underline'><Link href={'mailto:contact@kwiqsoft.com'}>contact@kwiqsoft.com</Link></div>

                        </div>
                        <div className='text-left text-xl pl-4 pt-6'>
                            <div className='flex gap-2'><MapPin />Address</div>
                            <div> New Delhi, India</div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <hr />
                    <div className='text-center'>© Copyright {getYear} - Kwiqsoft. All Rights Reserved.</div>
                </div>
            </FloatingSquaresBackground>
        </div>


    )
}

export default Footer