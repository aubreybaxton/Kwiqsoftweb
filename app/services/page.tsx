import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ServicesSection, ServicesStep } from '@/jsonfile';
import Industry from '@/mycomponent/Industry';
import Contactus from '@/mycomponent/contactus';
import FloatingSquaresBackground from '@/mycomponent/bgStyle';

function Services() {
  return (
    <div className='bg-white' >
      <FloatingSquaresBackground>
      <section className='flex pt-50 text-white px-12'>
        <div className='flex-1'>
          <div className='text-4xl'>
            Services
          </div>
          <div>
            We help our partners accelerate disruption both within their organizations and industries.They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
          </div>
        </div>
        <div className='flex-1 bg-center'>
          <Image src={'assets/ser_vec.svg'} alt='cross' height={200} width={450} />
        </div>
      </section>
      </FloatingSquaresBackground>
      <section className='h-80 p-12'>
        <div className='text-center text-black text-5xl p-16 border-y-4 border-violet-200'> Our Services</div>
      </section>
      <section>
        {ServicesSection?.map((data) => (
          <div key={data.title} className='text-black flex p-12'>

            <Image src={data.image} alt='cross' height={200} width={400} />
            <div className='p-12'>
              <div className='text-3xl'>{data.title}</div>
              <div>{data.description}</div>

              <div>{data.offerings?.flatMap((offering) => (
                <li key={`${offering}`}>{offering}</li>
              ))}</div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className='text-center text-black mx-4 sm:mx-12 md:mx-24 p-4'>
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

          <div className="flex h-full items-center bg-light">
            {ServicesStep?.map((data, index) => (
              <React.Fragment key={data.title}>
                {/* Card */}
                <div className="flex flex-col items-center p-4 text-center ">
                  <div className="h-60 flex items-center justify-center">
                    <Image src={data.image} alt={data.title} height={80} width={100}
                      className='hover:scale-110 transition duration-300 ease-in-out' />
                  </div>
                  <div className="font-semibold text-xl mt-1">{data.title}</div>
                  <div className="text-gray-600 text-sm">{data.description}</div>
                </div>

                {/* Dot between cards */}
                {index < ServicesStep.length - 1 && (
                  <div className="flex items-center justify-center px-4">
                    <Image src="/assets/dots3.svg" alt="dots" height={50} width={60} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
      <section>
        <div className="bg-[url('/assets/disc.png')] h-full bg-cover p-12 ">
          <div className='flex w-full justify-center'>
            <Image src={'/assets/undraw_Designer_by46.svg'} alt='cross' height={200} width={400} />
            <div className='text-4xl text-center'>
              <div>Have a Project to discuss? </div>
              <div> Let's talk to us...</div>
              <br/>
              <Link href={'/contact'} className='border-1 rounded-lg px-4 py-2 hover:bg-red-400'>
                <button type='button'>Contact</button>
              </Link> 
            </div>
          </div>
          <div>

          </div>
        </div>

      </section>
      <section>
        <Industry/>
      </section>
      <section>
        <Contactus/>
      </section>
    </div>
  )
}

export default Services