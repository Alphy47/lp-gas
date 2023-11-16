import React from 'react'
import us from '../assests/us.jpg'

const Intro = () => {
  return (
    <div className='intro w-full h-95% bg-white py-20 px-4 justify-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={us} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#0a042d] md:text-4xl sm:text-3xl text-2xk font-bold py-2'>EFFORTLESS GAS SOLUTIONS AT YOUR DOORSTEP.</h1>
                <p className='text-justify' style={{ textAlign: 'justify', textIndent: '20px', marginBottom: '15px' }}>LPG Smart Service is simply an effort to provide a highly reliable service
                    to the people of Sri Lnka by increasing the convenience of their gas 
                    consumption needs. By this, our reducing the awkward situations in 
                    gas transportation to the customer.
                </p>
                <p className='text-justify' style={{ textAlign: 'justify', textIndent: '20px', marginBottom: '15px' }}>Our nation-wide sales and distribution network is supported 
                    by a modern fleet of LPG tankers and storage and filling facility operated with the 
                    highest international safety standards. And the priority is to provide 
                    a comfortable service with a new experience to all the stakeholders 
                    related to us by mixing with the modern technologies in the world 
                    and being equipped with new designs. Combining the full knowledge 
                    and experience of our members with the ability to operate sustainably, 
                    responsibly, ethically and tranparently will enhance our
                    future approach.
                </p>
            </div>
        </div>
    </div>
  )
};

export default Intro