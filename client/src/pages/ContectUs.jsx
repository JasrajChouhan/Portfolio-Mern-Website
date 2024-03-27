import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user/UserContext';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeContext'; 

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const { user, isAuthorized } = useContext(UserContext);
  const { theme } = useTheme(); 
  const navigate = useNavigate();
  const toast = useToast();

  if (!isAuthorized) {
    navigate('/signin');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('api/v1/contactus', {
        name,
        email,
        socialMedia
      }, { withCredentials: true });
      console.log(response);

      toast({
        status: 'success',
        title: 'Form submitted',
        description: `Form submitted successfully for ${user.name}`,
        duration: 5000,
        isClosable: true
      });

      setName("");
      setEmail("");
      setSocialMedia("");
    } catch (error) {
      toast({
        status: 'error',
        title: 'Form submission failed',
        description: error.response.data.message,
        duration: 5000,
        isClosable: true
      });
    }
  };

  return (
    <div className={`flex flex-col justify-center mt-10 mx-10 border ${theme === 'dark' ? 'border-gray-700 text-white bg-gray-800' : 'border-blue-100 text-gray-700 bg-gray-50'} rounded-2xl shadow-2xl focus:to-blue-400 hover:focus:to-blue-600 w-full`}>
      <div className="heading mt-2 text-center font-semibold text-2xl">
        <h1>Connect with me</h1>
      </div>

      <div className="form-div">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 mx-5 ">
          <div className="mx-5 flex flex-col">
            <label htmlFor="name" className="text-zinc-800 text-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Full name"
              className={`px-3 py-2 my-1 rounded-lg border ${theme === 'dark' ? 'border-gray-700 text-white bg-gray-700' : 'border-blue-400 text-gray-700 bg-gray-200'} hover:border-blue-500 hover:bg-gray-50 focus:to-blue-500 hover:focus:to-blue-600 focus:outline-none`}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mx-5 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              className={`px-3 py-2 my-1 rounded-lg border ${theme === 'dark' ? 'border-gray-700 text-white bg-gray-700' : 'border-blue-400 text-gray-700 bg-gray-200'} hover:border-blue-500 hover:bg-gray-50 focus:to-blue-500 hover:focus:to-blue-600 focus:outline-none`}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mx-5 flex flex-col">
            <label htmlFor="socialMedia">Social Media URL</label>
            <input
              type="text"
              id="socialMedia"
              value={socialMedia}
              placeholder="LinkedIn URL"
              className={`px-3 py-2 my-1 rounded-lg border ${theme === 'dark' ? 'border-gray-700 text-white bg-gray-700' : 'border-blue-400 text-gray-700 bg-gray-200'} hover:border-blue-500 hover:bg-gray-50 focus:to-blue-500 hover:focus:to-blue-600 focus:outline-none`}
              onChange={(e) => setSocialMedia(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center ' >

          <button
            type="submit"
            className={`text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl ml-5 mt-4 font-semibold text-white ${theme === 'dark' ? 'dark:bg-gray-700 dark:text-white' : 'dark:bg-white dark:text-gray-700'} mb-3`}
          >
            Submit
          </button>

          </div>
          
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
