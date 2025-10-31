import Link from 'next/link';
import React from 'react';


function Astrology() {
    return (
        <div>
            <div className="grid grid-cols-2  bg-[url('/assets/hero-head.gif')] bg-cover bg-center">
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
                <div>

                </div>
            </div>
            <div className='m-20 p-18 rounded-lg shadow-xl/30 text-4xl text-center font-extrabold text-capitilize'>
            India's Most Well-Known and Top Astrology Website Design Company

            </div>
            <div className='m-20 p-12'>
            To contact us and place an order for an astrological website design,click here.

            </div>
        </div>
    )
}

export default Astrology