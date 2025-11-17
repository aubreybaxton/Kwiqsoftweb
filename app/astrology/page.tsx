import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AstrologyCard } from '@/jsonfile'


function Astrology() {
    return (
        <div className='bg-white'>
            <div className="grid grid-cols-1  bg-[url('/assets/hero-head.gif')] bg-cover bg-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className='p-24 text-white'>
                    <h3 className='text-5xl'>
                        Astrology Website Design & Development Services
                    </h3>
                    <br />
                    Are you an established astrologer from India or another country seeking the best astrological web design firm to provide your offline astrology business an internet presence? Do you want your services to be discovered online as well as in newspapers and magazines? Do you want an astrological website that is responsive and easy to use? Are you looking for the top astrological website? In that case, you should be proud of yourself because you are in the correct spot.
                    <div className='mt-6'>
                        <Link href={'#'} className='btn btn-warning rounded-full' >Get The Best Astrology Website Now!</Link>
                    </div>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <Image src={'/assets/web-design-laptop.svg'} alt='bluearrow' height={280} width={450} />
                </div>
                <div>

                </div>
            </div>
            <div className='m-20 p-18 bg-white text-black rounded-lg shadow-xl/30 text-4xl text-center font-extrabold text-capitilize'>
                India's Most Well-Known and Top Astrology Website Design Company
            </div>
            <div className='m-20 p-12 text-4xl bg-blue-600 rounded-lg'>
                To contact us and place an order for an astrological website design,click here.

            </div>
            <article className='flex justify-center gap-12'>
                {AstrologyCard.map((data) => (
                    <div key={data.title} className='w-auto shadow-2xl p-6 text-2xl text-black rounded-lg hover:scale-105 
                    transition delay-150 duration-300 ease-in-out' >

                        <div >
                            <Image src={data.cover_image} alt={data.title} width={400} height={250} className='rounded-lg' />
                        </div>
                        <div className='flex p-2'>
                            <div className='text-center  text-2xl'>
                                <Image src={data.avatar} alt={data.title} width={parseInt(data.width)} height={40} className='rounded-lg' />
                            </div>
                            <div className='pl-4'>{data.title}</div>

                        </div>
                        <div className='flex gap-24'>
                            <div className='text-lg'>{data.description}</div>

                            <Link href={data.actions.link} className='text-white bg-green-500 p-2 rounded-lg hover:bg-green-800'> {data.actions.label}</Link>
                        </div>
                    </div>
                ))}
            </article>
            <article className="p-4 bg-[url('/assets/astro-bg.jpg')]">

            </article>
        </div>
    )
}

export default Astrology