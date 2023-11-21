import React from 'react'
import us from '../assests/us.jpg'

const Intro = () => {
  return (
    <div id='intro' className='intro w-full h-100% bg-white  pt-20 pb-10 px-4 justify-center'>
        <div className='max-w-[1240px] mx-auto mt-4 grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={us} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#0a042d] md:text-4xl sm:text-3xl text-2xk font-bold py-2'>EFFORTLESS GAS SOLUTIONS AT YOUR DOORSTEP.</h1>
                <p className='text-justify' style={{ textAlign: 'justify', textIndent: '20px', marginBottom: '15px' }}>Gas Hub stands committed to 
                providing exceptional and inclusive services, ensuring accessibility and convenience for all, including members of the disabled community. 
                Our mission is to revolutionize gas consumption needs in Sri Lanka, eliminating transportation challenges faced by customers, especially those 
                with disabilities.
                </p>
                <p className='text-justify' style={{ textAlign: 'justify', textIndent: '20px', marginBottom: '15px' }}>We are dedicated to empowering the disabled 
                community by integrating modern technologies and designs that cater to diverse abilities. By combining our extensive knowledge and sustainable 
                operational practices, we pledge to serve responsibly, ethically, and transparently, ensuring an inclusive future for all.
                </p>
            </div>
        </div>
    </div>
  )
};

export default Intro