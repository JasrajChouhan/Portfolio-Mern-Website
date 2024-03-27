import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Signin from './components/auth/Signin'
import SignUp from './components/auth/SignUp'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NotFound from './components/note_found_page/NotFound'
import { useContext  , useState , useEffect} from 'react'
import { UserContext } from './context/user/UserContext.jsx'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import AboutUs from './pages/AboutUs.jsx'
import MyAccount from './components/profile/MyAccount.jsx'
import ForgetPassword from './components/auth/ForgetPassword.jsx'
import ResetPassword from './components/auth/ResetPassword.jsx'
import ContectUs from './pages/ContectUs.jsx'

import AllBlogs from './components/Blog/AllBlogs.jsx'
import CreateBlog from './components/Blog/CreateBlog.jsx'
import BlogPost from './components/Blog/BlogPost.jsx'


function App() {

  const {user , setUser , isAuthorized , setIsAuthorized} = useContext(UserContext)

  useEffect ( () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/v1/user/getuser` , {withCredentials : true})
       
        setUser( response.data.user )
       
        setIsAuthorized(true)
      } catch (error) {
        setIsAuthorized(false);
      }
    }
    fetchUser();
  } , [isAuthorized ,  setUser  ] )

  


  return (
    <>
       <BrowserRouter >
       <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} /> 
        <Route path="/signin" element = {<Signin/>} /> 
        <Route path="/signup" element = {<SignUp/>} /> 
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path = "/reset-password/:id/:token"   element = {<ResetPassword/>} />
        <Route path="/myaccount" element = {<MyAccount/>} /> 
        <Route path="/contact-us" element = {<ContectUs/>} /> 
        <Route path="/aboutus" element = {<AboutUs/>} /> 
        <Route path="/*" element = {<NotFound/>} /> 
        <Route path="/all-blogs" element = {<AllBlogs/>} /> 
        <Route path="/create-blog" element = {<CreateBlog/>} /> 
        <Route path="/blog/:id" element = {<BlogPost/>} /> 
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
    </>
  )
}

export default App
