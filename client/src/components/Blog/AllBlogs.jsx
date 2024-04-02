import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import parse from 'html-react-parser';

function AllBlogs() {
  const { user, setUser, isAuthorized, setIsAuthorized } = useContext(UserContext);
  const navigate = useNavigate();
  const toast = useToast();
  const searchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);

  if (isAuthorized === false) {
    navigate('/signin');
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        searchRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/v1/blog', { withCredentials: true });
        console.log(response.data.allBlogs);
        setBlogs(response.data.allBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast({
          status: 'error',
          title: 'Error',
          description: 'Failed to fetch blogs. Please try again later.',
          isClosable: true,
          duration: 5000
        });
      }
    };

    fetchBlogs();
  }, []);

  

  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mx-10 mt-10">
      <h1 className="text-2xl font-bold mb-5">My Blogs</h1>
      <div className="mb-5 flex items-center">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search by title..."
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 mr-3 focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-400 dark:text-gray-600 cursor-pointer"
          onClick={() => searchRef.current.focus()}
        >
          <path
            fillRule="evenodd"
            d="M12.843 14.222a7 7 0 111.415-1.415l4.55 4.55a1 1 0 11-1.414 1.415l-4.55-4.55zm-5.127-1.327a5 5 0 111.415-1.414l5.42 5.419a1 1 0 11-1.414 1.415l-5.42-5.42z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
  {filteredBlogs.map(blog => (
    <div key={blog._id} className=" border hover:border-gray-300 dark:hover:border-blue-300  overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <img className="object-cover w-full h-48" src={blog.image.url} alt={blog.title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{blog.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{parse(blog.content.substring(0, 100))}</p>
        <Link
          to={`/blog/${blog._id}`}
          className="inline-block px-4 py-2 text-white bg-blue-500 dark:bg-blue-700 rounded hover:bg-blue-700 dark:hover:bg-blue-900 transition duration-300"
        >
          Read Blog
        </Link>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default AllBlogs;
