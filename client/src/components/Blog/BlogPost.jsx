import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useToast } from '@chakra-ui/react';


function BlogPost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const toast = useToast();

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await axios.get('/api/v1/blog/' + id);
        setPost(response.data.blog);
      } catch (error) {
        toast({
          title: 'Failed to fetch blog post.',
          status: 'error',
          description: error.response.data.message || 'An error occurred.',
          duration: 5000,
          isClosable: true,
        });
        console.error('Error:', error);
      }
    };

    fetchOnePost();
  }, [id, toast]);

  return (
    <div className="mx-10 mt-10">
      {post ? (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:hover:border-blue-300 ">
          
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <div className="image-div  flex justify-center items-center my-10 ">
            <img src={post.image.url} alt="post's main image or thumbnail" width={600} height={100}  />
          </div>
            <p className="text-gray-700 dark:text-gray-300">{parse(post.content)}</p>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Created: {new Date(post.createdAt).toLocaleDateString()}{' '}
              {new Date(post.createdAt).toLocaleTimeString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last Updated: {new Date(post.updatedAt).toLocaleDateString()}{' '}
              {new Date(post.updatedAt).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogPost;
