import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IndustryCard } from '@/jsonfile';

function Industry() {
    return (
        <div className='h-full bg-white text-black py-5' >
            <div className='flex items-center gap-5 justify-center pt-18'>
                <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                <div className='text-5xl'> Industries </div>
                <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
            </div>
            <div className='text-xl text-center my-12 px-18'>
                We offer a multitude of technology solutions, that drive efficiency and productivity to keep your business always one step ahead from the rest.
            </div>

            <div className="grid  gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 m-12  shadow-xl p-8 rounded-lg" >
                {IndustryCard?.map((card) => (
                    <div
                        key={card.name}
                        className=" text-center hover:rounded-xl hover:shadow-lg hover:scale-110 transition-all delay-300 ease-in-out h-full "
                    >
                        <div className='flex flex-col items-center justify-center text-center'>
                            <Image src={card.icon} alt={card.name} width={50} height={50} />
                            <h2 className="text-xl font-semibold my-4">{card.name}</h2>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Industry