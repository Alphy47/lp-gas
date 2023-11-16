import React from 'react'
import indexbg from '../assests/indexbg.jpg'

const Hero = () => {

  /*const backgroundImageStyle = {
    backgroundImage: indexbg,
    bacgroundSize: 'cover',
    backgroundPosition: 'center',
  }*/

  return (
    <div className='hero' style={{ backgroundImage: `url(${indexbg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='max-w-[800] mt-[5px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <div className='h-[30%] py-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <p className='text-[#a8a8a8] font-bold p-2'>Your Quick Solution to Hassle-Free Ordering</p>
            <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold spark-text'>Order in a
            <span style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}> Spark!</span></p>
            
            <button className='bg-white w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black' 
            style = {{ transition: 'background-color 0.3s, color 0.3s',
              border: 'none', 
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF5733'; // Change to the desired hover background color
                e.target.style.color = 'white'; // Change to the desired hover text color
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white'; // Revert to the original background color
                e.target.style.color = 'black'; // Revert to the original text color
              }}
            >Get Started</button>

          </div>
        </div>
    </div>
  )
}

export default Hero 