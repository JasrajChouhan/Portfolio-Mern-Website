import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import {useNavigate} from 'react-router-dom'

function HeroSection() {
    const { theme } = useTheme();
    const navigate = useNavigate()

    const forNavigation = () => {
        navigate('/aboutus') 
    }

    return (
        <div className={`bg-${theme === 'dark' ? 'transparent' : 'white'} text-${theme === 'dark' ? 'white' : 'black'} py-10 mt-5 px-6 rounded-2xl  focus:border-blue-800`}>
            <div className="max-w-2xl mx-auto text-center">
                {/* <img
                    src="/planet.png"
                    alt="Planet"
                    className="w-40 mx-auto mb-8"
                /> */}
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to My Website
                </h1>
                <p className="text-lg mb-4">
                    A showcase of my skills as a{' '}
                    <span className={`text-${theme === 'dark' ? 'blue-400' : 'blue-500'} animate-pulse`}>
                        full-stack MERN developer
                    </span>
                </p>
                <button onClick={forNavigation} className={`bg-${theme === 'dark' ? 'blue-500' : 'blue-400'} text-white px-4 py-2 rounded-lg hover:bg-${theme === 'dark' ? 'blue-600' : 'blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-opacity-80 transition-colors duration-300`}>
                    Resume
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
