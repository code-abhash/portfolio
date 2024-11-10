import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='bg-[#99b0b3] text-[#333333] py-14 px-4'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-5xl font-semibold mb-8 text-center text-[#333333]'>Contact</h1>
        
        <div className='flex space-x-8 mb-6 justify-center'>
          <a href='https://www.instagram.com/abhash__raj/' target='_blank' rel='noopener noreferrer' className='text-[#e54074] hover:underline'>
            <FontAwesomeIcon icon={faInstagram} className='text-4xl' />
          </a>
          
          <a href='https://www.linkedin.com/in/abhash-raj-5486402a5/' target='_blank' rel='noopener noreferrer' className='text-[#376aec] hover:underline'>
            <FontAwesomeIcon icon={faLinkedin} className='text-4xl' />
          </a>
          
          <a href='https://www.facebook.com/profile.php?id=100086664092936' target='_blank' rel='noopener noreferrer' className='text-[#4b74db] hover:underline'>
            <FontAwesomeIcon icon={faFacebook} className='text-4xl' />
          </a>
          
          <a href='mailto:abhashraj751@gmail.com' target='_blank' rel='noopener noreferrer' className='text-[#dc3434] hover:underline'>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl' />
          </a>
        </div>
        
        <p className='text-lg mb-4'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-[#586994]' />
          Email: <a href='mailto:abhashraj069@gmail.com' className='hover:underline'>abhashraj069@gmail.com</a>
        </p>

        <p className='text-lg mb-4'>
          <FontAwesomeIcon icon={faPhone} className='mr-2 text-[#586994]' />
          Phone: <a href='tel:875770XXXX' className='hover:underline'>8757702300</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
