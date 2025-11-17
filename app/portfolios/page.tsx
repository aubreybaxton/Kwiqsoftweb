import React from 'react';
import Image from 'next/image';

function Portfolios() {
    return (
        <div>
            <section className='flex pt-50 text-white bg-gradient-to-b from-[#340569] to-[#861cff] px-12'>
                <div>
                    <div className='text-4xl'>
                        Portfolios
                    </div>
                    <div>
                        We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
                    </div>
                </div>
                <div>
                    <Image src={'assets/ser_vec.svg'} alt='cross' height={200} width={450} />
                </div>
            </section>
            <section className='h-80 p-12'>
                <div className='text-center text-black text-5xl p-16 border-y-4 border-violet-200'> Kwiqsoft Portfolio</div>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Portfolios