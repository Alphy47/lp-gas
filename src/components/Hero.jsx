import React, { useState } from 'react'
import indexbg from '../assests/indexbg.jpg'
import { useNavigate } from 'react-router-dom';



const Hero = () => {

const navigate = useNavigate()

  return (
    
    <div id='hero'
         className='hero flex' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='max-w-[800] mt-[5px] w-full h-screen m-auto text-center flex flex-col justify-center'>
          <div className='h-[30%] flex flex-col py-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <div className='h-30%'>
              <p className='text-[#a8a8a8] font-bold p-2'>Your Quick Solution to Hassle-Free Ordering</p>
            </div>
            <div className='h-30%'>
              <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold spark-text'>Order in a
              <span style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}> Spark!</span></p>
            </div>
            
            
            <button className='bg-white w-[200px] rounded-md mt-5 font-bold mx-auto py-3 text-black' 
            style = {{ transition: 'background-color 0.3s, color 0.3s',
              border: 'none', 
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF5733'; 
                e.target.style.color = 'white'; 
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black'; 
              }}
              onClick={() => navigate ('login')}

            >Get Started</button>
            
          </div>
        </div>
    </div>
     
     
  )
     
}

export default Hero 