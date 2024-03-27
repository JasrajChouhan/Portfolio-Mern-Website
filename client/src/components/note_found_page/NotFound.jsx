import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx'; 

function NotFound() {
    const { theme } = useTheme();

    return (
        <div className={`mt-10 flex items-center justify-center min-h-screen p-4 text-center transition duration-300 ease-in-out ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <motion.img
                src="../../public/funny.png"
                alt="Not Found"
                className="w-64 mx-auto mb-4 md:w-96" 
                initial={{ scale: 0 }}
                animate={{ rotate: [0, 10, -10, 10, 0], scale: 0.5 }}
                transition={{ duration: 0.8 }}
            />
            <div className='flex flex-col justify-center mx-auto' >
                <h1 className={`mb-2 text-4xl font-bold md:text-6xl ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                    Oops!
                </h1>
                <p className={`mb-5 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    We can't seem to find the page you're looking for.
                </p>
                <Link
                    to="/"
                    className={`px-6 py-3 text-sm font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'dark' ? 'bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200'}`}
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
