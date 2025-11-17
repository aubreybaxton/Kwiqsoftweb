import { MailIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FloatingSquaresBackground from './bgStyle'

function Footer() {
    return (
        <FloatingSquaresBackground>
            <div className='grid grid-cols-5 text-center p-12  text-white'>
                <div className='text-left col-span-2 p-4'>
                    <h4 className='text-4xl'>Kwiqsoft</h4>
                    <div className='text-xl'>
                        Our business accounting packages are tailored to suit your individual financial requirements and unique business needs.
                    </div>

                    <div className=''>
                        <h2>Find us on</h2>
                        <div className=''>
                            <button>facebook</button>
                            <button>facebook</button>
                            <button>facebook</button>
                            <button>facebook</button>
                        </div>
                    </div>

                </div>
                <div className='text-left'>
                    <h4 className='text-2xl'> Important Links </h4>
                    <div className='text-left pl-4'>
                        <div><Link href='/about'>About Us</Link></div>
                        <div><Link href='/portfolios'>Projects</Link></div>
                        <div><Link href='/services'>Services</Link></div>
                        <div><Link href='/blog'>Blog</Link></div>
                        <div><Link href='/privacypolicy'>Privacy Policy</Link></div>
                    </div>
                </div>
                <div className='text-left'>
                    <h4 className='text-2xl'>Featured Services</h4>
                    <div className='text-left pl-4'>
                        <div><Link href='/services'>Web Development</Link></div>
                        <div> <Link href='/services'> Android & IOS Development</Link></div>
                        <div> <Link href='/services'>Digital Marketing</Link></div>
                        <div>  <Link href='/services'>UI/UX Design</Link></div>


                    </div>
                </div>
                <div className='text-left'>
                    <div className='text-2xl'>Contact us</div>
                    <div>
                        <div><PhoneCall />Phone No</div>
                        <div><Link href={'tel: +91 9319924798'}>+91 9319924798</Link></div>
                        <div><Link href={'tel: +91 9311980594'}>+91 9311980594</Link></div>


                    </div>
                    <div>
                        <div><MailIcon />Email</div>
                        <div><Link href={'tel: +91 9319924798'}>+91 9319924798</Link></div>



                    </div>
                </div>
            </div>
        </FloatingSquaresBackground>

    )
}

export default Footer