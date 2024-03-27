import React from 'react';

function ProjectSection() {
    const projects = [
        {
            category: 'MERN Stack Project',
            name: 'Eduknot',
            description: "A comprehensive platform designed to facilitate student interaction by providing solutions to academic doubts, access to news, and study materials across universities. My role involved leading the development team, designing the architecture, and implementing features to enhance user engagement.",
            githubLink: 'https://github.com/JasrajChouhan/eduknot',
            liveViewLink: 'https://eduknot.vercel.app/',
            image: '/eduknot.png', // Make sure the path is correct. Assuming it's in the public directory.
            technologies: ['MongoDB', 'ReactJs', 'ExpressJs', "NodeJs"],
        },
        {
          category: 'MERN Stack Project',
          name: 'Job Seeker',
          description: 'The Dad Joke Generator is a fun project built using HTML, CSS, and JavaScript. It fetches jokes from an API and displays them in a simple, user-friendly interface. Whether you need a quick laugh or some light-hearted entertainment, this app has you covered!',
          githubLink: 'https://github.com/JasrajChouhan/Password-Generator',
          liveViewLink: 'https://dad-joke-genterator.vercel.app/',
          image: '/dad.png', 
          technologies: ['HTML','CSS','JS'],
      },
        {
            category: 'ML Project using TensorFlow and Keras',
            name: 'Employee-on-Leave-or-Not',
            description: 'Utilized TensorFlow and machine learning to predict employee leave status, demonstrating my ability to integrate AI and machine learning into practical applications.',
            githubLink: 'https://github.com/JasrajChouhan/Employee-on-Leave-or-Not-',
            liveViewLink: '#',
            image: 'https://via.placeholder.com/300',
            technologies: ['Python', 'Machine Learning', 'Keras', 'TensorFlow'],
        },
        {
            category: 'UI Project using ReactJs and Tailwind CSS',
            name: 'Password Generator',
            description: 'In this project, we\'ll create a password generator application using ReactJS, focusing on user interface design and state management. The application will allow users to generate and customize their passwords based on their preferences.',
            githubLink: 'https://github.com/JasrajChouhan/Password-Generator',
            liveViewLink: 'https://password-generator-inky-zeta.vercel.app/',
            image: '/password2.png', 
            technologies: ['React JS', 'Tailwind CSS', 'JS'],
        },
        {
          category: 'UI Project using HTML,CSS and JS',
          name: 'Dad Joke Generator',
          description: 'The Dad Joke Generator is a fun project built using HTML, CSS, and JavaScript. It fetches jokes from an API and displays them in a simple, user-friendly interface. Whether you need a quick laugh or some light-hearted entertainment, this app has you covered!',
          githubLink: 'https://github.com/JasrajChouhan/Password-Generator',
          liveViewLink: 'https://dad-joke-genterator.vercel.app/',
          image: '/dad.png', 
          technologies: ['HTML','CSS','JS'],
      },
        
    ];

    return (
        <div className="py-12 bg-white dark:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 border border-blue-100 dark:hover:border-blue-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
                            <div className="p-5">
                                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap justify-start items-center gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        GitHub
                                    </a>
                                    <a href={project.liveViewLink} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors duration-300 px-4 py-2 rounded">
                                        Live View
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
