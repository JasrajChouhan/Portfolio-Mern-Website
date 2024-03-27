import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../profile/Profile';
import { useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';
import { useTheme } from '../../context/ThemeContext.jsx'; // Import the useTheme hook
import { FiSun, FiMoon } from 'react-icons/fi'; // Import sun and moon icons

function Header() {
  const { user, setUser, isAuthorized, setIsAuthorized } = useContext(UserContext);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme(); // Use the theme context

  if (!isAuthorized) {
    navigate('/signin');
    return null;
  }

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 dark:hover:border-blue-300 flex items-center h-16 px-3 justify-between z-50 shadow-lg text-zinc-700 dark:text-zinc-200 mx-10 mt-10 rounded-2xl border hover:border-blue-300 dark:border-gray-700   `}>
      <div className="logo-div">
        <img src="" alt="" /> AppName
      </div>
      <div className="menu-div flex items-center justify-center gap-4">
        <Link to='/'>Home</Link>
        <Link to='/all-blogs'>Blog</Link>
        <Link to='/aboutus'>About us</Link>
        <Profile />
        
        <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')} className="bg-transparent border-none focus:outline-none">
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Header;
