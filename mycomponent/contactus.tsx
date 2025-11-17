import React from 'react'

function Contactus() {
    return (
        <div className='flex p-12 bg-white'>
            <div className='flex-1 bg-[linear-gradient(to_bottom,#bd082c,#ff4b70)] text-center p-8 rounded-[64] text-white'>
                <br />
                <h4 className='text-2xl'>Let Discuss Your Idea !!</h4>
                <hr />
                <br />
                <div className='text-3xl'>Get In Touch</div>
                <form className='text-left w-full px-4'>
                    <div className='p-4 w-full'>
                        <label htmlFor="name" >Name</label>
                        <br />
                        <input type='text' id='name' className='border border-black rounded-lg p-2 w-full' />
                    </div>

                    <div className='p-4 w-full'>
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' className='border border-black rounded-lg w-full p-2' />
                    </div>
                    <div className='p-4 w-full'>
                        <label htmlFor="phone">Phone</label>
                        <input type='tel' id='phone' className='border border-black rounded-lg w-full p-2' />
                    </div>
                    <div className='p-4 w-full'>
                        <label htmlFor="project">Projets</label>
                        <textarea cols={40} rows={5} className='border border-black rounded-lg w-full p-2' id='project' />
                    </div>

                    <div className='float-end border-1 rounded-lg m-2 hover:bg-green-400 p-4'>
                        <button type='button'> Submit</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col flex-1 text-black justify-center items-center p-4">
                <h4 className='text-4xl'>Have a Project to discuss?</h4>
                <div className='text-left text-xl px-12'>
                    Tell us about your project. We know how to incorporate the tech solutions that best suit your case. Just drop us a line to get yours!
                </div>
            </div>
        </div>
    )
}

export default Contactus