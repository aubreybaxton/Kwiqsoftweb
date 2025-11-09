'use client';

import React from 'react'
import Image from 'next/image'
import { TabCards } from '@/jsonfile'

function TabSection() {
    return (
        <>
            <div className="h-full text-white py-5 w-full bg-[url('/assets/box2x.jpg')] bg-cover" >
                <div className='flex items-center gap-5 justify-center pt-18'>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    <div className='text-5xl'> Technologies </div>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                </div>
                <div className='text-xl text-center my-12 px-18'>
                    We have emerging technologies to help our clients with wide software solutions. You have the idea and we have just the right resources with rich industry experience that your software development project needs.
                </div>

                <div className="" >
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-border  flex justify-center text-red-400 ">
                        {TabCards?.map((data, index) => (
                            <div key={data.id}>
                                <input type="radio" name="my_tabs_2" className={`tab text-black capitalize text-2xl peer-checked:bg-red-400 text-white`} aria-label={data.id} defaultChecked={index === 0} />

                                <div className="tab-content border-base-300 mb-2 p-10 bg-[url(/assets/tech_box.svg)] bg-cover bg-center w-full" >
                                    {data.icons.map((tabImage, indx) => (
                                        <Image src={tabImage} alt='test' key={indx} width={100} height={60} />
                                    ))}
                                </div>

                            </div>

                        ))}

                    </div>
                </div>

            </div>
        </>
    )
}

export default TabSection