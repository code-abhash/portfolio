import React from 'react';
import mypic from './img/230001002.png';

const About = () => {
  return (
    <div className='bg-[#99b0b3] text-[#333333] py-14 px-6 md:px-16 lg:px-64'>
      <h1 className='text-5xl font-semibold text-[#333333] mb-8 text-center'>
        About Me
      </h1>

      <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto'>
        {/* Profile Picture */}
        <img
          src={mypic}
          alt='Abhash Raj'
          className='w-48 h-48 object-cover border-4 border-[#4DB6B6] rounded-md transition-transform duration-300 hover:scale-105'
        />

        {/* Description */}
        <div className='mt-6 md:mt-0 md:ml-8 text-left'>
          <p className='text-lg'>
            Hello! I'm <span className='font-bold'>Abhash Raj</span>, a passionate B.Tech student specializing in <span className='font-bold'>Computer Science Engineering</span> at <span className='font-bold'>IIT Indore</span>. Currently in my second year, I am driven by a profound interest in technology and its ability to solve real-world problems. My journey in the field of computer science began with a fascination for coding and web development, which has only grown as I explore the endless possibilities that technology offers.
          </p>

          <h2 className='text-2xl font-bold mt-6 mb-4 text-[#586994]'>
            My Interests
          </h2>
          <ul className='list-disc list-inside text-left'>
            <li className='font-medium'>Web Development</li>
            <li className='font-medium'>Machine Learning</li>
            <li className='font-medium'>Finance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
