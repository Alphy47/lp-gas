import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#a8a8a8] font-bold p-2'>Your Quick Solution to Hassle-Free Ordering</p>
            <div>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>Igniting Convenience at Your Fingertips.</h1>
            </div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Order in a Spark!</p>
            <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero 