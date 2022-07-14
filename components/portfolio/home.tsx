import React from 'react'

export default function Home() {
    return (
        <div className='w-full flex h-screen items-center justify-center' id='home'>
            <div className='w-full flex items-center justify-center xs:flex-col sm:flex-col xs:gap-5 sm:gap-5 xs:mt-20 sm:mt-20 '>
                <div className='relative w-2/6 flex flex-col justify-center items-center xs:hidden sm:hidden'>
                    <div className='w-52 h-64 bg-primary/50  rounded-tl-3xl rounded-br-3xl shadow-lg'></div>
                    <img src='/prakash.jpg' className='w-52 h-64 absolute top-5 left-24 border-4 border-primary/50 rounded-tl-3xl rounded-br-3xl shadow-lg' />
                </div>
                <div className='w-4/6 flex flex-col gap-7'>
                    <h6 className='text-gray-400 text-xl'>Hello, I'm</h6>
                    <h1 className='font-bold text-6xl uppercase xs:w-3/6 xs:break-word sm:break-word sm:text-2xl xs:text-2xl'><span className='text-primary'>Prakash</span> Venkatachalam</h1>
                    <p className='w-5/6 font-normal font text-xl text-gray-400'>
                        A <span className='font-bold text-primary'>Full stack developer</span> with more than 3.8 years of strong web development experience using
                        reactJS. Strong experience in API development using Node JS and integration with web UI
                    </p>
                    <div>
                        <button className='bg-primary rounded px-6 py-2 text-white cursor-pointer'>Download my resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
