import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { UserContext } from '../../context/user/UserContext';
import {useNavigate} from 'react-router-dom'
export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image , setImage] = useState(null);
  const [imageUrl , setImageUrl] = useState("");
  const toast = useToast();

  const { user, setUser, isAuthorized, setIsAuthorized } = useContext(UserContext)
  const navigate = useNavigate();

  if(!isAuthorized) {
    navigate('/signin') 
    return (
      <div>you are not authorized or  logged in as a admin</div>
    )
  }

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setImageUrl(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
      await axios.post('/api/v1/blog', formData, { withCredentials: true  , 
        headers : {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast({
        title: 'Blog post created successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setTitle('');
      setContent('');
    } catch (error) {
      toast({
        title: 'Failed to create blog post.',
        status: 'error',
        description: error.response.data.message || 'An error occurred.',
        duration: 5000,
        isClosable: true,
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-40">
      <form className="w-full mx-10 " onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg border hover:border-gray-200 dark:border-blue-300  "
              id="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
              Blog thumbnail
            </label>
            <div className="image-div">
              <input type='file' accept='.png , .jpg , .webp' onChange={handleFileChange} />
              {imageUrl && <img src={imageUrl} alt="Thumbnail Preview" className="mt-2" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
            </div>
          </div>
          <div className="w-full px-3 my-10">
            <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
              Content
            </label>
            <Editor
              apiKey = {import.meta.env.VITE_TINYMCE_API}
              init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Jasraj Chouhan',
                mergetags_list: [
                  { value: 'First.Name', title: 'First Name' },
                  { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                content_css: 'style.css', 
              }}
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
              initialValue='write your blog Jasraj Chouhan'
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
