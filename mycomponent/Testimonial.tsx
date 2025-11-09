import React from 'react'
import Image from 'next/image';

function Testimonial() {
    return (
        <div className="h-full text-white bg-[url('/assets/test1_bg.jpg')] bg-cover text-black py-5" >
            <div className='bg-violet-300'>
                <div className='flex items-center gap-5 justify-center pt-18'>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    <div className='text-5xl'> Testimonial </div>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                </div>
                <div className='text-xl text-center my-12 px-18'>
                    We have worked for several innovator companies who have interesting task for us. Here is what our clients have to say about the magic we create.
                </div>
                <div className='flex relative justify-center h-[75vh]'>

                </div>
            </div>
        </div>
    )
}

export default Testimonial