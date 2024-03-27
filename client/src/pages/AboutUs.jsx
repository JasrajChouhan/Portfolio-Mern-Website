import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function AboutUs() {
  const name = 'Jasraj Chouhan';
  const branch = 'Artificial Intellengce and data science';
  const year = '2nd Year';
  const college = 'MBM University';
  const email = 'jasrajc945@gmail.com';
  const socialMedia = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isjasrajchouhan/', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com/isJasrajChouhan', icon: <FaTwitter /> },
    { name: 'GitHub', url: 'https://github.com/JasrajChouhan/', icon: <FaGithub /> }
  ];
  const skills = ['Mern Stack', 'OOP Concept', 'Java' , 'DBMS' , 'Basic of ML','Arudino']; // Add your skills here
  const resumeUrl = 'url_to_your_resume_pdf'; // Replace with your actual resume URL

  return (
    <div className="mx-10 mt-10">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>{branch}, {year}</p>
          <p>{college}</p>
          <p>{email}</p>
          <div className="mt-2 flex space-x-4">
            {socialMedia.map((item, index) => (
              <a key={index} href={item.url} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Resume</h3>
           <iframe src="https://drive.google.com/file/d/1T929ctYSClbpIwd15XEd5Z8r0uRiliey/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
