import React from 'react';

const icons = [
    { title: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { title: 'React JS', icon: 'devicon-react-original colored' },
    { title: 'Express JS', icon: 'devicon-express-original' },
    { title: 'Node JS', icon: 'devicon-nodejs-plain colored' },
    { title: 'JS', icon: 'devicon-javascript-plain colored' },
    { title: 'OOP', icon: 'devicon-java-plain' },
    { title: 'DBMS', icon: 'devicon-postgresql-plain colored' },
    { title: 'Postman', icon: 'devicon-postman-plain colored' },
    { title: 'C/C++', icon: 'devicon-cplusplus-plain colored' },
    { title: 'Java', icon: 'devicon-java-plain' },
    { title: 'HTML', icon: 'devicon-html5-plain colored' },
    { title: 'CSS', icon: 'devicon-css3-plain colored' },
    { title: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
];

function IconsPage() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8 dark:transparent">
            {icons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center border dark:hover:border-blue-300 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md dark:shadow-dark transition duration-300 transform hover:scale-105 hover:shadow-xl">
                    <i className={icon.icon} style={{ fontSize: '3rem' }} />
                    <span className="text-sm mt-2">{icon.title}</span>
                </div>
            ))}
        </div>
    );
}

export default IconsPage;
