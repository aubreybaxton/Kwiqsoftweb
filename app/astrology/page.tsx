import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AstrologyCard, AstrologyWebCards, WhatsAppLink } from '@/jsonfile'
import { Check } from 'lucide-react';



function Astrology() {
    return (
        <div className=' bg-white'>
            <div className="grid grid-cols-1  bg-[url('/assets/hero-head.gif')] bg-cover bg-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className='p-24 text-white'>
                    <h3 className='text-xl sm:text-xl md:text-2xl lg:text-4xl'>
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
            <div className=''>
                <section className='px-12 pb-10 '>

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
                                    <Image src={data.cover_image} alt={data.title} width={400} height={250} className='rounded-lg bg-cover' />
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
                <section className="px-12 bg-[url('/assets/astro-bg.jpg')]">
                    <div className='flex gap-5 p-6'>
                        <div className='flex-1'>
                            <h4 className='text-4xl text-center'>Manage your astrological consulting business.</h4>
                            <div className='p-4 text-xl'>
                                As time has gone on, astrological websites have gone online, much like any other business in the modern world. People who are looking for astrological remedies will consult online and call their astrologers. They even enjoy chatting and scheduling sessions with their preferred astrologer online. Online payments are also made. Therefore, we can assist you in going online with our responsive and mobile-friendly websites if you are still operating your astrological centre in an antiquated manner. This will make you more accessible. In the ecology of Indian astrological websites, as well as in online astrology globally, there has been a subtle shift. Numerous Indian and international astrologers have made online astrology their primary business strategy.
                                <br />
                                <br />
                                Given the astounding rise in the internet astrological industry, it's time to take a closer look and begin marketing and promoting your astrological business using KWIQSOFT LLP's professional skills.
                            </div>
                            <div className='bg-blue-300 p-4 text-xl rounded-xl'>
                                We already have the trust of over 1000+ astrological website projects!
                            </div>
                        </div>
                        <div className='flex-1 bg-yellow-500 p-6 rounded-xl'>
                            <h4 className='text-4xl'>Facts and numbers from an astrological website</h4>
                            <div>Horoscopes and astrology are currently the two most sought topics on the internet.</div>
                            <ul className='list-disc'>
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
                <section className='bg-white p-12'>
                    <div className='text-center'>
                        <div className='text-4xl bg-yellow-500 p-4 rounded-lg'>Astrologers' website design and development services. Get the Best Website for Astrology Right Now!</div>
                        <div>Over 1000+ astrology websites have been created by us in the past, all of them are meticulously crafted to meet the specific demands and specifications of our domestic and foreign astrologers. Astrology website design firm with an entire staff dedicated to providing astrological services and use modern server side frameworks!</div>
                    </div>
                    <div className='flex gap-8 p-4'>
                        {
                            AstrologyWebCards?.map((data) => (
                                <div key={data.title} className='flex-1 shadow-2xl p-6 text-2xl text-black rounded-lg hover:scale-105 transition delay-150 duration-300 ease-in-out' >
                                    <div className='bg-cover'>
                                        <Image src={data.image} alt={data.title} width={400} height={250} className='rounded-lg ' />
                                    </div>
                                    <div className='pl-4'>{data.title}</div>
                                    <div className='text-lg'>{data.description}</div>
                                </div>
                            ))
                        }

                    </div >
                    <article className='p-4'>
                        <div className='text-4xl text-center bg-yellow-500 p-4 rounded-lg'>Why Is a User-Friendly and Responsive Website Important for Astrologers?</div>

                        <div className='text-xl p-8'>With over 198 million internet users, India is now the third-largest online marketing hub in the world. This rapid digital expansion presents a golden opportunity for both Indian astrologers looking to grow their presence and international astrologers aiming to tap into a thriving and engaged market. Many astrology website owners in India are already experiencing fast-paced growth, signaling a strong demand for online astrology services across the globe.
                        </div>

                    </article>
                    <article className='flex gap-8 p-8'>
                        <div className='flex-1 shadow-2xl p-6 text-2xl text-black rounded-lg hover:scale-105 transition delay-150 duration-300 ease-in-out' >

                            <div className='pl-4 text-center'>Best Astrology Design Website</div>

                            <div className='text-lg p-4'>
                                <ul>
                                    <li className='flex'><Check /> Promote your Astrology Website on Google</li>
                                    <li className='flex'> <Check />Promote Your Astrology Website on Instagram</li>
                                    <li className='flex'> <Check /> Promote Your Astrology Website on Twitter</li>
                                    <li className='flex'> <Check /> Promote Your Astrology Website on Facebook</li>
                                </ul>
                            </div>
                            <div className='pt-4'>
                                <Link href={WhatsAppLink} className='bg-green-500 p-4 rounded-xl'> Start Chatting, Click here</Link>
                            </div>
                        </div>
                        <div className='flex-1  shadow-2xl p-6 text-2xl text-black rounded-lg hover:scale-105 transition delay-150 duration-300 ease-in-out' >

                            <div className='pl-4 text-center'>Astrology Website Development</div>
                            <div className='text-lg p-4'>
                                <ul>
                                    <li className='flex'><Check /> Make your clients aware of your offerings.</li>
                                    <li className='flex'> <Check /> Display your credibility.</li>
                                    <li className='flex'> <Check /> Promote your business online</li>
                                    <li className='flex'> <Check /> Expand your reach</li>


                                </ul>
                            </div>
                            <div className='pt-4 '>
                                <Link href={WhatsAppLink} className='bg-yellow-500 p-4 rounded-xl'> Contact Us Click here</Link>
                            </div>
                        </div>
                    </article>
                </section >
                <section className="px-12 bg-[url('/assets/astro-bg.jpg')]">
                    <div className='text-center text-4xl py-4 sm:text-xl md:text-2xl'>
                        What Qualifies KWIQSOFT as India's Top Astrology Website Design Agency?
                    </div>
                    <div>
                    <article className='flex flex-col  gap-8 p-8 text-white md:flex-row md:p4'>
                        <div className='flex-1 shadow-2xl p-6 text-2xl border rounded-lg ' >

                            <div className='pl-4 text-center'>Best Astrology Design Website</div>

                            <div className='text-lg p-4'>
                                <ul className='list-disc'>
                                    <li>Free Website Hosting</li>
                                    <li> Free Domain</li>
                                    <li> Free 6th Maintenance </li>
                                    <li> Free Multiple Website Changes</li>
                                    <li> Free Unlimited Support</li>
                                </ul>
                            </div>
                            <div className='pt-4 '>
                                <Link href={WhatsAppLink} className='bg-yellow-300 p-4 rounded-xl'> Contact Us Click here</Link>
                            </div>
                        </div>
                        <div className='flex-1  shadow-2xl p-6 text-2xl border rounded-lg' >

                            <div className='pl-4 text-center'>Astrology Website Development</div>
                            <div className='text-lg p-4'>
                            Best Offers provided by KWIQSOFT
                                <ul className='list-disc'>
                                    <li>Using the newest, most advanced web frameworks</li>
                                    <li>We stay current with UX, UI, and web design trends.</li>
                                    <li>Our websites are user-friendly and responsive</li>
                                    <li>Affordable Astrology Design Options</li>
                                    <li>Digital Promotion for Websites in Astrology</li>
                                </ul>
                            </div>
                            <div className='pt-4 '>
                                <Link href={WhatsAppLink} className='bg-green-800 p-4 rounded-xl'> Contact Us Click here</Link>
                            </div>
                        </div>
                    </article>

                    </div>
                </section>
            </div>
        </div >
    )
}

export default Astrology