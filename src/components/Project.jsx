import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cullinary from './img/culinary_compass.jpeg';
import curr from './img/currency.webp';
import patient_monitor from './img/patienthealth.jpg';
import amz from './img/amazon_clone.png';

const projects = [
  {
    id: 1,
    title: "Siddhi Health App Monitoring",
    image: patient_monitor,
    githubLink: "https://github.com/code-abhash/Siddhi_health_app_monitoring.git",
    description: "An app to monitor patient health remotely and track vitals in real-time."
  },
  {
    id: 2,
    title: "Cullinary Compass",
    image: cullinary,
    githubLink: "https://github.com/code-abhash/Cullinary_compass.git",
    description: "A food guide application to explore and discover new recipes and restaurants."
  },
  {
    id: 3,
    title: "Amazon Clone",
    image: amz,
    githubLink: "https://github.com/code-abhash/Amazon_clone.git",
    description: "A fully responsive clone of the Amazon website with a shopping cart and user authentication."
  },
  {
    id: 4,
    title: "Currency Converter",
    image: curr,
    githubLink: "https://github.com/code-abhash/Currency_convertor.git",
    description: "A web app for converting currency rates using live exchange rates."
  }
];

const Project = () => {
  return (
    <div className='bg-[#99b0b3] text-[#333333] py-14 px-4'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-5xl font-semibold mb-8 text-center text-[#333333]'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full'
            >
              <div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-32 object-cover rounded-lg mb-4'
                />
                <h2 className='text-2xl font-semibold text-[#333333] mb-4'>{project.title}</h2>
                <p className='text-sm text-[#586994] mb-4'>{project.description}</p>
              </div>
              <div className='mt-auto'>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='flex items-center text-[#586994] hover:underline'
                >
                  <FontAwesomeIcon icon={faGithub} className='mr-2' />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
