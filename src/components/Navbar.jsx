import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#586994] text-[#FAFAFA] px-6 py-4 md:px-16 lg:px-64'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl md:text-3xl font-serif font-extrabold text-[#FAFAFA]'>
          Abhash Raj
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-2xl text-[#FAFAFA] focus:outline-none'
          >
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>
        <div
          className={`absolute md:relative top-16 md:top-auto left-0 md:left-auto right-0 w-full md:w-auto bg-[#586994] md:bg-transparent transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0`}
        >
          <a
            href="#home"
            className='block text-lg font-medium text-[#E6E8EB] hover:text-[#4DB6B6] transition-colors duration-300 py-2'
          >
            Home
          </a>
          <a
            href="#about"
            className='block text-lg font-medium text-[#E6E8EB] hover:text-[#4DB6B6] transition-colors duration-300 py-2'
          >
            About Me
          </a>
          <a
            href="#services"
            className='block text-lg font-medium text-[#E6E8EB] hover:text-[#4DB6B6] transition-colors duration-300 py-2'
          >
            Skills
          </a>
          <a
            href="#projects"
            className='block text-lg font-medium text-[#E6E8EB] hover:text-[#4DB6B6] transition-colors duration-300 py-2'
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
