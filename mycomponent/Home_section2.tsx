import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Homecards, ServiceCards } from '@/jsonfile';

function Home_section2() {
    return (
        <div>
            {/* page2 */}
            <div className='h-full bg-white'>

                <div className="flex justify-center gap-24 p-24">
                    {[
                        { src: 'assets/bulb.svg', label: 'EXPERIENCE' },
                        { src: 'assets/rocket.svg', label: 'INNOVATIONS' },
                        { src: 'assets/trophy.svg', label: 'PROFESSIONALISM' },
                    ].map(({ src, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center border-x-2 p-12 text-center transition-transform duration-300 ease-in-out hover:animate-bounce hover:shadow-lg hover:rounded-2xl"
                        >
                            <Image className="mx-auto" src={src} alt={label} width={48} height={36} />
                            <div className="mt-6 text-black font-bold text-2xl">{label}</div>
                        </div>
                    ))}
                </div>
                <div className=' relative h-96 bg-violet-600'>

                    <div className=' text-center p-12 text-white'>
                        <div className='text-5xl'> We Simplify Software Development Process</div>
                        <div className='text-xl pt-2'>We are a team of highly experienced software professionals adept in technical knowledge.</div>
                    </div>
                    <div className=''>
                        <div className=' flex items-center justify-center gap-8  m-4'>
                            {Homecards?.map((data) => (
                                <div key={data.title} className={`min-h-75 w-75 flex flex-col items-center justify-center text-center mx-8 shadow-2xl bg-white p-4 text-black rounded-xl hover:${data.background} hover:scale-110 hover:shadow-3xl transition-all duration-300 ease-in-out  z-20`}>
                                    <Image src={data.image} alt={data.title} height={32} width={40} />
                                    <div className='text-2xl my-4'>{data.title}</div>
                                    <div className='text-xl'>{data.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className=' bg-white flex justify-between'>
                    <Image src={'/assets/cross.svg'} alt='cross' height={24} width={40} className='ml-24 animate-spin' />
                    <Image src={'/assets/egg2.svg'} alt='cross' height={220} width={350} className='ml-12 rotate-45' />
                </div>



            </div>
            {/* page3 */}
            <div className='h-full bg-white text-black'>
                <div className='text-center mx-24 p-4'>
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
                <div className=' flex justify-center'>

                    <div className="bg-[url('/assets/dots.png')] bg-no-repeat bg-cover w-150">
                        <Image
                            src="assets/Sec1.svg"
                            alt="bluearrow"
                            height={240}
                            width={500}
                            className='ml-22 py-4'
                            data-aos="fade-up-right"
                        />
                        <Image
                            src="assets/prosperity1.svg"
                            alt="bluearrow"
                            height={240}
                            width={500}
                            data-aos="fade-up-left"
                        />
                        <Image
                            src="assets/Guarantee1.svg"
                            alt="bluearrow"
                            height={240}
                            width={500}
                            className='ml-18 py-4'
                            data-aos="fade-down-right"
                        />
                        <Image
                            src="assets/Quality1.svg"
                            alt="bluearrow"
                            height={240}
                            width={500}
                            data-aos="fade-up-left"
                        />
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 m-12" >
                    {ServiceCards?.map((card) => (
                        <div
                            key={card.title}
                            className="group [perspective:1000px] transition-transform 
                            duration-700 text-center hover:rounded-xl h-60 "
                        >
                            <div className='relative bg-white shadow-2xl p-6 rounded-xl 
                            group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]
                             transition-transform hover:scale-105 hover:shadow-3xl h-full'>

                                {/* Front card */}
                                <div className='absolute flex flex-col items-center justify-center inset-0 [backface-visibility:hidden] h-full'>
                                    <Image src={card.image} alt={card.title} width={124} height={84} />
                                    <h2 className="text-2xl font-semibold my-4">{card.title}</h2>
                                </div>
                                {/* Back card */}
                                <div className='absolute flex flex-col items-center justify-center px-8 inset-0 text-red-500 [transform:rotateY(180deg)] [backface-visibility:hidden] h-full'>
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

        </div>

    )
}

export default Home_section2;