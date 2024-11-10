import React from 'react';

const techArray = [
  {
    id: 1,
    title: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard language for creating webpages. It defines the structure and content of a webpage using elements such as headings, paragraphs, links, and images.'
  },
  {
    id: 2,
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to control colors, fonts, layouts, and overall presentation, ensuring that HTML content looks appealing.'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'JavaScript is a dynamic programming language used to make webpages interactive. It allows developers to create dynamic content, control multimedia, animate images, and handle events on the client-side.'
  },
  {
    id: 4,
    title: 'React.js',
    description: 'React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create large web applications that can update and render efficiently without reloading the page.'
  },
  {
    id: 5,
    title: 'Django',
    description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It is known for its simplicity and the ability to build robust web applications quickly with minimal code.'
  },
  {
    id: 6,
    title: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, making it possible to build scalable, real-time web applications.'
  },
  {
    id: 7,
    title: 'C++',
    description: 'C++ is a powerful, high-performance programming language used for system/software development, game development, drivers, and complex web servers. It supports object-oriented programming and low-level memory manipulation.'
  },
  {
    id: 8,
    title: 'Python',
    description: 'Python is a high-level, interpreted programming language known for its readability and versatility. It is widely used in web development, data science, artificial intelligence, automation, and many other fields.'
  }
];

const Skills = () => {
  return (
    <div className='bg-[#99b0b3] text-[#333333] py-14 px-6 md:px-16 lg:px-24'>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold text-[#333333] mb-8 text-center'>
          Skills
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {techArray.map((tech) => (
            <div 
              key={tech.id} 
              className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
            >
              <h2 className='text-2xl font-semibold text-[#333333] mb-4'>{tech.title}</h2>
              <p className='text-sm text-[#586994]'>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
