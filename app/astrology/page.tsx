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
            <section className='pb-10'>


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
            </section>
            <section className="p-4 bg-[url('/assets/astro-bg.jpg')]">
                <div className='flex p-6'>
                    <div className='flex-1'>
                        <h4 className='text-4xl text-center'>Manage your astrological consulting business.</h4>
                        <div className='p-4 text-xl'>
                            As time has gone on, astrological websites have gone online, much like any other business in the modern world. People who are looking for astrological remedies will consult online and call their astrologers. They even enjoy chatting and scheduling sessions with their preferred astrologer online. Online payments are also made. Therefore, we can assist you in going online with our responsive and mobile-friendly websites if you are still operating your astrological centre in an antiquated manner. This will make you more accessible. In the ecology of Indian astrological websites, as well as in online astrology globally, there has been a subtle shift. Numerous Indian and international astrologers have made online astrology their primary business strategy.
                            <br />
                            <br />
                            Given the astounding rise in the internet astrological industry, it's time to take a closer look and begin marketing and promoting your astrological business using KWIQSOFT LLP's professional skills.
                        </div>
                        <div className='bg-blue-300 p-6 rounded-xl'>
                            We already have the trust of over 1000+ astrological website projects!
                        </div>
                    </div>
                    <div className='flex-1 bg-yellow-500 p-6 rounded-xl'>
                        <h4 className='text-4xl'>Facts and numbers from an astrological website</h4>
                        <div>Horoscopes and astrology are currently the two most sought topics on the internet.</div>
                        <ul>
                            <li>Over 70 million people in the U.S. read their horoscopes regularly, making astrology content a top driver of engagement on lifestyle websites.</li>
                            <li>Astrology apps and websites generated more than $2 billion in global revenue in 2023, reflecting a growing demand for digital spiritual tools.</li>
                            <li>
                                Websites offering personalized birth charts and compatibility reports see up to 3x higher user retention than general horoscope pages.
                            </li>
                            <li>
                                Google searches for “birth chart” and “Mercury retrograde” have increased by over 300% in the past 5 years, signaling rising mainstream interest in astrology.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='bg-white text-black px-12'>
                <div className='text-center'>
                    <div className='text-4xl px-6'>Astrologers' website design and development services. Get the Best Website for Astrology Right Now!</div>
                    <div>Over 1000+ astrology websites have been created by us in the past, all of them are meticulously crafted to meet the specific demands and specifications of our domestic and foreign astrologers. Astrology website design firm with an entire staff dedicated to providing astrological services and use modern server side frameworks!</div>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}

export default Astrology