import React, { useState } from 'react';
import mypic from './img/mypic.jpg';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  return (
    <>
      <div className='bg-[#99b0b3] text-[#333333] text-center py-16'>
        {/* Profile Picture */}
        <img
          src={mypic}
          alt='Abhash Raj'
          className='mx-auto mb-6 w-48 h-48 object-cover border-none rounded-full shadow-lg hover:scale-105 transition-transform duration-300'
        />
        <h1
          className={`font-semibold text-[#333333] transition-transform duration-300 ${isHovered ? 'scale-105 opacity-90' : 'scale-100 opacity-100'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className='text-4xl sm:text-5xl md:text-6xl'>{`Abhash Raj`}</p>
          <span className='block text-lg sm:text-xl md:text-2xl text-[#586994] mt-2'>
            CSE, 2nd Year (B.Tech), IIT Indore
          </span>
        </h1>
        <div className='mt-6'>
          {/* Download CV Button */}
          <a
            href='https://drive.usercontent.google.com/u/0/uc?id=1mOkEk9fRe8GX8J8Fr94eHIzq0dWJ9bEw&export=download'
            download
            className="inline-block px-6 py-2 mr-4 text-[#333333] font-medium text-lg border-2 border-[#4DB6B6] rounded-full bg-transparent hover:bg-[#4DB6B6] hover:text-white transition-all duration-300"
          >
            Download CV
          </a>

          {/* Connect Button */}
          <a
            href="#contact"
            className="inline-block px-6 py-2 text-white font-medium text-lg bg-[#4DB6B6] rounded-full shadow-md hover:bg-[#3C9F9F] transition-all duration-300"
          >
            Connect with me
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
