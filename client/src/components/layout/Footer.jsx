import React, { useEffect } from 'react'
import {Link  , useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/user/UserContext'
import { useContext } from 'react'

import { FaFacebookF , FaInstagram , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { useTheme } from '../../context/ThemeContext.jsx';

function Footer() {

  const {user , setUser , isAuthorized , setIsAuthorized} = useContext(UserContext)
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme(); 

  


  
  if(!isAuthorized){
     navigate('/signin')
     return null;
    
 }
    
  
    const baseClasses = "flex flex-col md:flex-row justify-around items-center shadow-lg mx-10 mt-10 rounded-lg border hover:border-blue-300 py-10 focus:to-blue-600 hover:shadow-2xl mb-10";
    const themeClasses = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-zinc-700';
  
  return (
    <footer className={`${baseClasses} ${themeClasses}`}>
      <div className="flex flex-col items-center md:items-start">
        <div className="logo-div">
          <h1 className="text-xl md:text-2xl font-bold">AppName</h1>
        </div>
        <div className="copy-right">
          <p className="text-sm">© 2024 AppName. All Rights Reserved.</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start mt-4">
        <div className="topic-name font-semibold"></div>
        <ul className=" text-md flex flex-col ">
          <Link to={'/'} >Home</Link>
          <Link to={'/all-blogs'} >Blog</Link>
          <Link to = {'/myaccount'} >My Account</Link>
          <Link to = {'/aboutus'} >About us</Link>
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-start mt-4">
        <div className="topic-name font-semibold">Company</div>
        <ul className=" text-sm  flex flex-col  ">
         
          <Link to={'/aboutus'} >About Us</Link>
          
          <Link to={'/contact-us'} >Contact Us</Link>
          <Link to={'#'} >FAQs</Link>
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-start mt-4">
        <div className="topic-name font-semibold ml-3">Follow Us</div>
        <div className="flex mt-2">
          <Link to={'https://www.instagram.com/isjasrajchouhan/'} className="mr-2 ">
          <FaFacebookF size={40} />
          </Link>
          <Link to={'https://twitter.com/isJasrajChouhan'} className="mr-2">
          <FaSquareXTwitter size={40} />
          </Link>
          <Link to={'https://www.instagram.com/isjasrajchouhan/'} className="mr-2">
          <FaInstagram size={40} />
          </Link>
          <Link to={'https://www.linkedin.com/in/isjasrajchouhan/'} className="mr-2">
          <FaLinkedin  size={40} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer

