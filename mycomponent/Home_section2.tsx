import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Homecards, IndustryCard, ServiceCards, TabCards } from '@/jsonfile';
import TabSection from './TabSection';
import Testimonial from './Testimonial';
import Industry from './Industry';
import Contactus from './contactus';



function Home_section2() {
    return (
        <div>
            {/* page2 */}
            <div className='h-full w-screen relative bg-white'>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-12 p-8 sm:p-12 md:p-24">
                    {[
                        { src: 'assets/bulb.svg', label: 'EXPERIENCE' },
                        { src: 'assets/rocket.svg', label: 'INNOVATIONS' },
                        { src: 'assets/trophy.svg', label: 'PROFESSIONALISM' },
                    ].map(({ src, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center text-center p-8 border-x-0 sm:border-x-2 
                                transition-transform duration-300 ease-in-out 
                                 hover:shadow-lg hover:rounded-2xl w-full sm:w-auto"
                        >
                            <Image className="mx-auto" src={src} alt={label} width={48} height={36} />
                            <div className="mt-4 sm:mt-6 text-black font-bold text-xl sm:text-2xl">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='relative h-full overflow-visible sm:h-96 md:h-10/12 lg:  sm:p-2 md:p-4 bg-violet-600'>

                    <div className='relative text-center p-12 text-white'>
                        <div className='text-2xl sm:text-3xl md:text-5xl font-semibold'> We Simplify Software Development Process</div>
                        <div className='text-xl pt-2'>We are a team of highly experienced software professionals adept in technical knowledge.</div>
                    </div>
                    <div className='relative'>
                        <div className='relative flex  flex-wrap items-center justify-center gap-8  m-4'>
                            {Homecards?.map((data) => (
                                <div key={data.title} className={`w-full sm:w-[280px] md:w-[320px] lg:w-[360px] 
                                    flex flex-col items-center justify-center text-center 
                                    shadow-2xl bg-white p-6 text-black rounded-xl 
                                    hover:${data.background} hover:scale-105 hover:shadow-3xl 
                                    transition-all duration-300 ease-in-out z-20`}>
                                    <Image src={data.image} alt={data.title} height={32} width={40} />
                                    <div className='text-2xl my-4'>{data.title}</div>
                                    <div className='text-xl'>{data.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className='w-screen h-64 relative bg-white flex justify-between overflow-hidden'>
                    <Image src={'/assets/cross.svg'} alt='cross' height={24} width={40} className='ml-24 animate-spin' />
                    <Image src={'/assets/egg2.svg'} alt='cross' height={200} width={300}
                        className="absolute bottom-0 right-0 rotate-45 opacity-30 w-[450px] sm:w-[220px] md:w-[300px]" />
                </div>

            </div>
            {/* page3 */}
            <div className='relative  h-full bg-white text-black'>
                <div className='text-center mx-4 sm:mx-12 md:mx-24 p-4'>
                    <div className='flex items-center gap-5 justify-center'>
                        <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                        <div className='text-5xl'> Why Choose Us </div>
                        <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    </div>
                    <div className='text-xl pt-4'>We exactly know how to transform your business with our multi-disciplinary team, Which we assure Security, Prosperity, Guarantee, Quality that combines world-class software development.

                    </div>
                    <div className="flex justify-end mr-10">
                        <Image
                            src="/assets/Polygon.svg"
                            className="animate-bounce"
                            alt="bluearrow"
                            height={24}
                            width={40}
                        />
                    </div>
                </div>
                <div className="flex justify-center px-4 sm:px-8">
                    <div className="bg-[url('/assets/dots.png')] bg-no-repeat bg-cover w-full max-w-6xl flex flex-col flex-wrap justify-center gap-4 sm:gap-6">
                        {[
                            'Sec1.svg',
                            'prosperity1.svg',
                            'Guarantee1.svg',
                            'Quality1.svg',
                        ].map((src, index) => (
                            <div key={index} className="w-auto  flex justify-center">
                                <Image
                                    src={`/assets/${src}`}
                                    alt={src}
                                    layout="responsive"
                                    width={500}
                                    height={240}
                                    className="rounded-md"
                                    data-aos={
                                        index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <Image src={'/assets/cross.svg'} alt='cross' height={24} width={40} className='ml-24 animate-spin' />
                </div>
            </div>

            {/* page4 */}
            <div className='h-full bg-white text-black py-5' >
                <div className='flex items-center gap-5 justify-center pt-18'>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    <div className='text-5xl'> Our Services </div>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                </div>
                <div className='text-xl text-center my-12 px-18'>
                    We design and implement advanced custom software solutions and mobile apps to simplify your business problems. With our latest technology focus, agile methodology combined with cost effective digital solutions.

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                    {ServiceCards?.map((card) => (
                        <div
                            key={card.title}
                            className="group [perspective:1200px]  text-center hover:rounded-xl h-60 "
                        >
                            <div className='relative bg-white shadow-2xl p-6 rounded-xl 
                        group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]
                        transition-transform duration-1500 hover:shadow-3xl h-full'>

                                {/* Front card */}
                                <div className='absolute flex flex-col items-center justify-center inset-0 [backface-visibility:hidden] h-full'>
                                    <Image src={card.image} alt={card.title} width={124} height={84} />
                                    <h2 className="text-2xl font-semibold my-4">{card.title}</h2>
                                </div>
                                {/* Back card */}
                                <div className='absolute overflow-hidden rounded-xl flex flex-col items-center justify-center px-8 inset-0 bg-red-600 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] h-full'>
                                    <h2 className="text-2xl font-semibold my-4">{card.title}</h2>
                                    <p className="">{card.description}</p>
                                    <Link href={card.link} className="text-violet-600 font-medium mt-4 inline-block">
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>




            </div>
            {/* page 5 */}
            <div className='h-full bg-white text-black py-5' >
                <div className='flex items-center gap-5 justify-center pt-18'>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    <div className='text-5xl'> Our Portfolios </div>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                </div>
                <div className='text-xl text-center my-12 px-18'>
                    We have prepared portfolio for our latest projects that presents our brilliant team skills and capability to deliver quality products to meet clients expectations.
                </div>
                <div className='flex relative justify-center h-[75vh]'>
                    <div className='relative w-200  h-full '>
                        <div className='absolute top-0 bg-red-500 p-4 rounded-tl-4xl w-100 h- m-2 z-10 hover:scale-125 transition-all duration-500 hover:rounded-4xl'>
                            <Image src={'/assets/h_port1.png'} alt='image' width={400} height={100} />
                        </div>
                        <div className='absolute top-10 left-90 bg-red-500 p-4 rounded-br-4xl w-90 m-2 z-11 
                        hover:scale-125 transition-all duration-500 hover:rounded-4xl' >
                            <Image src={'/assets/h_port2.png'} alt='' width={350} height={80} />
                        </div>
                        <div className='absolute top-30 left-30 bg-red-500 p-4 rounded-t-4xl w-100 m-2 z-11
                         hover:scale-125 transition-all duration-500 hover:rounded-4xl'>
                            <Image src={'/assets/h_port3.png'} alt='' width={350} height={70} /></div>
                        <div className='absolute top-60 left-10 bg-red-500 p-4 rounded-s-4xl w-100 m-2 z-11 
                        hover:scale-125 transition-all duration-500 hover:rounded-4xl'>
                            <Image src={'/assets/h_port2.png'} alt='' width={350} height={100} />
                        </div>
                        <div className='absolute top-80 left-60 bg-red-500 p-4 rounded-br-4xl w-120 m-2 z-11
                         hover:scale-125 transition-all duration-500 hover:rounded-4xl'>
                            <Image src={'/assets/h_port2.png'} alt='' width={450} height={100} />
                        </div>
                    </div>
                </div>
            </div>
            {/* page 6 */}
            <Industry />

            {/* page 7 */}
            <TabSection />

            {/* page 8 */}
            <div className='h-screen flex items-center justify-center bg-white text-black ' >

                <div className='flex items-center justify-center'>
                    <div className='relative pt-18  px-18 z-20'>
                        <div className='z-10'>
                            <Image className='absolute ' src={"/assets/Repeat8.svg"} alt="rightImages" width={200} height={100} />
                        </div>
                        <div className='relative z-20'>
                            <div className='text-5xl '> We Promise, We Deliver. </div>
                            <div className='text-xl my-12 '>
                                Work with us and see how it goes. We promise to go the extra
                                mile for every project that we take onboard !!

                            </div>
                        </div>
                        <button type='button' className='bg-rose-600 hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 py-2 px-4 rounded-lg text-white'> Get Started</button>
                    </div>
                    <div className="w-1/2 pt-12 bg-center bg-cover" >
                        <Image src={"/assets/business_deal.svg"} alt="rightImages" width={500} height={100} className='mx-auto' />
                    </div>

                </div>

            </div>

            {/* page 8 */}
            <Testimonial />

            {/* page 9 */}

            <Contactus />

        </div>

    )
}

export default Home_section2;